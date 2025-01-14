"use client"

import { useState, useRef } from "react"
import { Upload, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface UploadStatus {
  status: "uploading" | "analyzing" | "completed" | "error"
  progress: number
  message: string
}

export function DocumentUpload() {
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<UploadStatus | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Start upload
    setUploading(true)
    setUploadStatus({
      status: "uploading",
      progress: 0,
      message: "Uploading document..."
    })

    // Simulate upload progress
    let progress = 0
    const uploadInterval = setInterval(() => {
      progress += 10
      setUploadStatus(prev => ({
        ...prev!,
        progress
      }))
      
      if (progress >= 100) {
        clearInterval(uploadInterval)
        // Start AI analysis
        setUploadStatus({
          status: "analyzing",
          progress: 0,
          message: "AI analyzing document content..."
        })
        
        // Simulate AI analysis progress
        let analysisProgress = 0
        const analysisInterval = setInterval(() => {
          analysisProgress += 15
          setUploadStatus(prev => ({
            ...prev!,
            progress: analysisProgress
          }))
          
          if (analysisProgress >= 100) {
            clearInterval(analysisInterval)
            setUploadStatus({
              status: "completed",
              progress: 100,
              message: "Analysis complete! Document processed successfully."
            })
            setUploading(false)
          }
        }, 800)
      }
    }, 300)
  }

  return (
    <div className="space-y-4">
      <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
        uploading ? "opacity-50 pointer-events-none" : "hover:border-primary cursor-pointer"
      }`}>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".pdf,.ppt,.pptx,.doc,.docx"
          onChange={handleUpload}
          disabled={uploading}
        />
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-12 w-12 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">
              Drag and drop your files here, or click to select files
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Supported formats: PDF, PPT, DOC (up to 10MB)
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-2"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
          >
            Select File
          </Button>
        </div>
      </div>

      {uploadStatus && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {uploadStatus.status === "uploading" && <Loader2 className="h-4 w-4 animate-spin text-blue-500" />}
            {uploadStatus.status === "analyzing" && <Loader2 className="h-4 w-4 animate-spin text-purple-500" />}
            {uploadStatus.status === "completed" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
            {uploadStatus.status === "error" && <AlertCircle className="h-4 w-4 text-red-500" />}
            <span className="text-sm font-medium">{uploadStatus.message}</span>
          </div>
          <Progress value={uploadStatus.progress} className="h-2" />
          {uploadStatus.status === "completed" && (
            <Alert>
              <AlertDescription className="text-sm">
                Our AI has analyzed your document and extracted key information for matching. View the document details for more information.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  )
} 