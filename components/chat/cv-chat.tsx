import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Image from 'next/image';

export default function CvChat() {
    const [showPreview, setShowPreview] = useState(false);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/sampleCV.pdf';
        link.download = 'sampleCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePreview = () => {
        setShowPreview(true);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <Image
                src="/images/cv-mian-bg.png"
                alt=""
                width={688}
                height={264}
                className="self-start"
            />
            <div className="flex gap-4">
                <button
                    className="hover:bg-[#5c568c]"
                    style={{
                        color: "#F3F3F3",
                        width: "168px",
                        height: "38px",
                        background: "#151327 0% 0% no-repeat padding-box",
                        border: "1px solid #707070",
                        borderRadius: "50px",
                    }}
                    onClick={handlePreview}
                >
                           أنشئ سيرتك الذاتية

                </button>
                <button
                    className="hover:bg-[#5c568c]"
                    style={{
                        color: "#F3F3F3",
                        width: "168px",
                        height: "38px",
                        background: "#151327 0% 0% no-repeat padding-box",
                        border: "1px solid #707070",
                        borderRadius: "50px",
                    }}
                    onClick={handleDownload}
                >
                           حمل سيرتك الذاتية

                </button>
            </div>

            {showPreview && (
                <div className="w-full">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                        <Viewer
                            fileUrl="/sampleCV.pdf"
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </Worker>
                </div>
            )}
        </div>
    );
}
