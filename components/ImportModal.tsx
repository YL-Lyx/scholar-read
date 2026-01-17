import React, { useState } from 'react';
import { Link, Loader, CheckCircle, AlertCircle, X } from 'lucide-react';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: () => void;
}

const ImportModal: React.FC<ImportModalProps> = ({ isOpen, onClose, onImport }) => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [progressStep, setProgressStep] = useState(0);

  if (!isOpen) return null;

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.includes('notebooklm.google.com')) {
        setStatus('error');
        return;
    }

    setStatus('loading');
    
    // Simulate the extraction pipeline
    setTimeout(() => setProgressStep(1), 800);  // Step 1: Connecting
    setTimeout(() => setProgressStep(2), 2000); // Step 2: Finding PDFs
    setTimeout(() => setProgressStep(3), 3500); // Step 3: Extracting Figures
    setTimeout(() => {
        setStatus('success');
        setTimeout(() => {
            onImport();
            // Reset state after closure
            setTimeout(() => {
                setStatus('idle');
                setUrl('');
                setProgressStep(0);
            }, 500);
        }, 1000);
    }, 4500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
        
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Import from NotebookLM</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Content */}
        <div className="p-6">
            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Import Complete</h4>
                    <p className="text-gray-500">Found and processed 2 documents.</p>
                </div>
            ) : (
                <form onSubmit={handleImport}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notebook Link
                    </label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Link className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="url"
                            placeholder="https://notebooklm.google.com/notebook/..."
                            value={url}
                            onChange={(e) => {
                                setUrl(e.target.value);
                                if (status === 'error') setStatus('idle');
                            }}
                            className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2.5 border ${status === 'error' ? 'border-red-300 bg-red-50' : ''}`}
                            required
                        />
                        {status === 'error' && (
                            <p className="text-xs text-red-600 mt-1 flex items-center">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                Please enter a valid NotebookLM URL.
                            </p>
                        )}
                    </div>

                    {status === 'loading' && (
                        <div className="mb-6 space-y-3">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                                <span>Processing...</span>
                                <span>{progressStep * 33}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                <div 
                                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${progressStep * 33}%` }}
                                />
                            </div>
                            <ul className="space-y-1 mt-2">
                                <li className={`text-xs flex items-center ${progressStep >= 1 ? 'text-indigo-600 font-medium' : 'text-gray-400'}`}>
                                    {progressStep >= 1 ? <CheckCircle className="w-3 h-3 mr-2" /> : <div className="w-3 h-3 mr-2 border border-gray-300 rounded-full"></div>}
                                    Connecting to Google NotebookLM...
                                </li>
                                <li className={`text-xs flex items-center ${progressStep >= 2 ? 'text-indigo-600 font-medium' : 'text-gray-400'}`}>
                                    {progressStep >= 2 ? <CheckCircle className="w-3 h-3 mr-2" /> : <div className="w-3 h-3 mr-2 border border-gray-300 rounded-full"></div>}
                                    Discovering PDF sources...
                                </li>
                                <li className={`text-xs flex items-center ${progressStep >= 3 ? 'text-indigo-600 font-medium' : 'text-gray-400'}`}>
                                    {progressStep >= 3 ? <Loader className="w-3 h-3 mr-2 animate-spin" /> : <div className="w-3 h-3 mr-2 border border-gray-300 rounded-full"></div>}
                                    Running extraction scripts (Figures & Captions)...
                                </li>
                            </ul>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${status === 'loading' ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    >
                        {status === 'loading' ? 'Analyzing...' : 'Connect & Import'}
                    </button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
