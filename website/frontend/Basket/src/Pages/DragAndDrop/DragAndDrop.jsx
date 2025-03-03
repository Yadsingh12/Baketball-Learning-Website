import React, { useState, useRef } from 'react';

const DragAndDrop = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [postureResult, setPostureResult] = useState('');
    const videoRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'video/mp4') {
            setVideoFile(file);
            setVideoUrl(URL.createObjectURL(file));
        } else {
            alert('Please upload a valid .mp4 video file.');
        }
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'video/mp4') {
            setVideoFile(file);
            setVideoUrl(URL.createObjectURL(file));
        } else {
            alert('Please upload a valid .mp4 video file.');
        }
    };

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const resetVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const removeVideo = () => {
        setVideoFile(null);
        setVideoUrl('');
        setIsPlaying(false);
        setPostureResult('');
    };

    const handleSubmit = async () => {
        if (!videoFile) {
            alert('Please upload a video first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', videoFile);

        try {
            const response = await fetch('http://127.0.0.1:8000/evaluate_posture/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                setPostureResult(result.posture);
            } else {
                throw new Error('Failed to upload video');
            }
        } catch (error) {
            console.error('Error uploading video:', error);
            alert('Failed to upload video. Please try again.');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
                width: '100vw',
                position: 'relative',
                paddingTop: '150px',
                backgroundColor: "black",
                minHeight: "100vh",
                overflowX: "hidden",
            }}
        >
            <div
                className="container"
                style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    color: 'black',
                    width: '50vw',
                    position: 'relative',
                    border: '2px solid #ea9215',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    marginBottom: "20px",
                }}
            >
                <h1 className="text-center mb-4">MP4 Video Uploader</h1>
                {postureResult && (
                    <h3 style={{ textAlign: 'center', color: '#ea9215' }}>Posture: {postureResult}</h3>
                )}
                {!videoUrl && (
                    <div
                        className="drop-zone"
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        style={{
                            border: '2px dashed  #ea9215',
                            padding: '20px',
                            textAlign: 'center',
                            marginBottom: '20px',
                            backgroundColor: 'white',
                            color: '#333',
                        }}
                    >
                        <p>Drag & Drop your .mp4 video here</p>
                        <input
                            type="file"
                            accept="video/mp4"
                            onChange={handleFileInput}
                            style={{ display: 'none' }}
                            id="fileInput"
                        />
                        <label htmlFor="fileInput" className="btn btn-secondary">
                            Or click to upload
                        </label>
                    </div>
                )}

                {videoUrl && (
                    <div className="video-container text-center">
                        <video
                            ref={videoRef}
                            src={videoUrl}
                            controls={false}
                            style={{ width: '10vw', maxWidth: '10vw', marginBottom: '20px', border: "2px solid #ea9215" }}
                            muted
                        />
                        <div className="button-group" style={{ marginBottom: "20px" }}>
                            <button className="btn btn-success mx-2" onClick={playVideo} disabled={isPlaying}>
                                Play
                            </button>
                            <button className="btn btn-warning mx-2" onClick={pauseVideo} disabled={!isPlaying}>
                                Pause
                            </button>
                            <button className="btn btn-info mx-2" onClick={resetVideo}>
                                Reset
                            </button>
                            <button className="btn btn-danger mx-2" onClick={removeVideo}>
                                Remove
                            </button>
                        </div>
                        <button className="btn btn-success mx-2" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DragAndDrop;