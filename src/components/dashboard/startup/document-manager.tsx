"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Trash2, Eye, Download, Brain, ChevronDown, AlertCircle } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Document {
  id: number
  name: string
  type: "pitch_deck" | "business_plan" | "financials" | "other"
  uploadedAt: string
  aiAnalysis?: {
    summary: string
    keyPoints: string[]
    insights: {
      category: string
      details: string
    }[]
    matchRelevance: {
      score: number
      factors: string[]
    }
  }
}

const MOCK_DOCUMENTS: Document[] = [
  {
    id: 1,
    name: "Pitch Deck.pdf",
    type: "pitch_deck",
    uploadedAt: "2024-03-15",
    aiAnalysis: {
      summary: "A comprehensive pitch deck highlighting the company's AI-powered solution for enterprise data analytics.",
      keyPoints: [
        "Proprietary machine learning algorithms",
        "Scalable cloud infrastructure",
        "Enterprise-grade security features",
        "Proven ROI with existing clients"
      ],
      insights: [
        {
          category: "Technology Stack",
          details: "Advanced AI/ML stack with focus on real-time processing and scalability"
        },
        {
          category: "Market Opportunity",
          details: "Targeting a $50B market in enterprise data analytics with 15% YoY growth"
        },
        {
          category: "Competitive Advantage",
          details: "Unique approach to real-time data processing with patented algorithms"
        }
      ],
      matchRelevance: {
        score: 92,
        factors: [
          "Strong alignment with enterprise needs",
          "Proven technology stack",
          "Clear market positioning"
        ]
      }
    }
  },
  {
    id: 2,
    name: "Business Plan.pdf",
    type: "business_plan",
    uploadedAt: "2024-03-14",
    aiAnalysis: {
      summary: "Detailed business plan outlining growth strategy and market expansion plans.",
      keyPoints: [
        "Clear go-to-market strategy",
        "Detailed financial projections",
        "Scalable business model",
        "Strong team background"
      ],
      insights: [
        {
          category: "Business Model",
          details: "SaaS model with enterprise licensing and implementation services"
        },
        {
          category: "Growth Strategy",
          details: "Focus on enterprise clients in finance and healthcare sectors"
        },
        {
          category: "Financial Projections",
          details: "Projected to reach $10M ARR within 24 months"
        }
      ],
      matchRelevance: {
        score: 88,
        factors: [
          "Solid business model",
          "Clear growth trajectory",
          "Strong market focus"
        ]
      }
    }
  },
  {
    id: 3,
    name: "Financial Projections.xlsx",
    type: "financials",
    uploadedAt: "2024-03-13",
    aiAnalysis: {
      summary: "Financial projections showing strong growth potential and path to profitability.",
      keyPoints: [
        "Clear revenue streams",
        "Realistic cost structure",
        "Healthy margins",
        "Investment requirements"
      ],
      insights: [
        {
          category: "Revenue Model",
          details: "Multiple revenue streams with focus on recurring revenue"
        },
        {
          category: "Cost Structure",
          details: "Efficient operations with scalable infrastructure"
        },
        {
          category: "Funding Needs",
          details: "Seeking Series A funding of $5M for market expansion"
        }
      ],
      matchRelevance: {
        score: 85,
        factors: [
          "Sustainable financial model",
          "Clear funding requirements",
          "Realistic projections"
        ]
      }
    }
  }
]

// Helper function for consistent date formatting
function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export function DocumentManager() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [expandedDocId, setExpandedDocId] = useState<number | null>(null)
  const [selectedDocId] = useState<number | null>(null)

  useEffect(() => {
    setDocuments(MOCK_DOCUMENTS)
  }, [])

  const deleteDocument = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }

  const getDocumentIcon = () => {
    return <FileText className="h-8 w-8 text-blue-600" />
  }

  const getDocumentTypeLabel = (type: Document["type"]) => {
    switch (type) {
      case "pitch_deck":
        return "Pitch Deck"
      case "business_plan":
        return "Business Plan"
      case "financials":
        return "Financial Document"
      default:
        return "Document"
    }
  }

  const getDocumentTypeColor = (type: Document["type"]) => {
    switch (type) {
      case "pitch_deck":
        return "bg-blue-100 text-blue-800"
      case "business_plan":
        return "bg-purple-100 text-purple-800"
      case "financials":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Your Documents</h3>
          <p className="text-sm text-gray-500">Manage and track AI analysis of your documents</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Upload New Document
        </Button>
      </div>

      <ScrollArea className="h-[600px] pr-4">
        <div className="grid gap-4">
          {documents.length === 0 ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No documents uploaded yet. Start by uploading your pitch deck or business plan.
              </AlertDescription>
            </Alert>
          ) : (
            documents.map((doc) => (
              <Collapsible
                key={doc.id}
                open={expandedDocId === doc.id}
                onOpenChange={() => setExpandedDocId(expandedDocId === doc.id ? null : doc.id)}
              >
                <Card className={`p-4 transition-shadow hover:shadow-md ${
                  selectedDocId === doc.id ? "ring-2 ring-primary" : ""
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getDocumentIcon()}
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getDocumentTypeColor(doc.type)}>
                            {getDocumentTypeLabel(doc.type)}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            Uploaded on {formatDate(doc.uploadedAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.aiAnalysis && (
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Brain className="h-4 w-4" />
                            AI Analysis
                            <ChevronDown className={`h-4 w-4 transition-transform ${
                              expandedDocId === doc.id ? "rotate-180" : ""
                            }`} />
                          </Button>
                        </CollapsibleTrigger>
                      )}
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="hover:text-red-600"
                        onClick={() => deleteDocument(doc.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {doc.aiAnalysis && (
                    <CollapsibleContent>
                      <div className="mt-4 pt-4 border-t space-y-6">
                        <div>
                          <h4 className="font-medium mb-2">AI Summary</h4>
                          <p className="text-sm text-gray-600">{doc.aiAnalysis.summary}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-3">Key Points</h4>
                            <ul className="text-sm space-y-2">
                              {doc.aiAnalysis.keyPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                  <span className="text-gray-600">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-3">Match Relevance</h4>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="text-2xl font-bold text-green-600">
                                  {doc.aiAnalysis.matchRelevance.score}%
                                </div>
                                <div className="text-sm text-gray-500">Match Score</div>
                              </div>
                              <ul className="text-sm space-y-2">
                                {doc.aiAnalysis.matchRelevance.factors.map((factor, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                    <span className="text-gray-600">{factor}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">AI Insights</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {doc.aiAnalysis.insights.map((insight, index) => (
                              <Card key={index} className="p-4 bg-gray-50">
                                <h5 className="font-medium text-sm mb-2">{insight.category}</h5>
                                <p className="text-sm text-gray-600">{insight.details}</p>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  )}
                </Card>
              </Collapsible>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
} 