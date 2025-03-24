"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Loader2, AlertTriangle, CheckCircle, Info, History, FileText, BookOpen, AlertOctagon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample articles
const sampleArticles = {
  real: [
    {
      id: "real1",
      title: "NASA's Webb Telescope Reveals Unprecedented View of Distant Galaxy",
      content: `NASA's Webb Telescope Reveals Unprecedented View of Distant Galaxy

The James Webb Space Telescope has captured the most detailed and sharpest images yet of the distant spiral galaxy NGC 7496, revealing unprecedented details of star formation and galactic structure, NASA announced today.

The observations, published in the peer-reviewed journal Astronomy & Astrophysics, show star-forming regions with clarity never before achieved at these cosmic distances. The research team, led by Dr. Sarah Johnson of the Space Telescope Science Institute, identified over 80 distinct stellar nurseries within the galaxy.

"What we're seeing is revolutionary," said Dr. Johnson. "The resolution and sensitivity of Webb allows us to observe individual star-forming clouds in a galaxy millions of light-years away. This was simply impossible before."

The images reveal complex structures within the galaxy's spiral arms, including delicate filaments of dust that appear to be funneling material toward regions of active star formation. Spectroscopic data also detected the chemical signatures of complex organic molecules in these regions.

Professor Mark Thompson of the University of Arizona, who was not involved in the research, called the findings "a significant leap forward in our understanding of galactic evolution."

The Webb telescope, launched in December 2021, is the result of a collaboration between NASA, the European Space Agency, and the Canadian Space Agency. Its infrared capabilities allow it to peer through cosmic dust and observe objects at the edge of the observable universe.

The research team plans to observe five more galaxies with similar characteristics over the next six months to determine if the patterns observed in NGC 7496 are common throughout the universe.`,
    },
    {
      id: "real2",
      title: "Study Finds Regular Exercise Reduces Risk of Cognitive Decline",
      content: `Study Finds Regular Exercise Reduces Risk of Cognitive Decline

A comprehensive 15-year study published yesterday in the Journal of Neuroscience has found that regular physical exercise significantly reduces the risk of cognitive decline in older adults.

The research, conducted by a team at Stanford University Medical Center, followed 2,340 adults aged 55 and older from 2008 to 2023. Participants who engaged in moderate physical activity for at least 150 minutes per week showed a 47% lower risk of developing cognitive impairment compared to sedentary individuals.

"This is one of the longest and largest studies examining the relationship between exercise and brain health," said lead researcher Dr. Elena Martinez. "The data clearly demonstrates that physical activity should be considered a crucial component of maintaining cognitive health as we age."

The study controlled for various factors including education level, smoking, alcohol consumption, and pre-existing health conditions. Even after adjusting for these variables, the protective effect of exercise remained statistically significant.

Participants underwent annual cognitive assessments and regular brain imaging. Those in the exercise group showed less brain atrophy and maintained better connectivity between brain regions critical for memory and executive function.

Dr. Robert Chen, a neurologist at Mayo Clinic who was not involved in the research, called the findings "compelling evidence that should inform public health guidelines for aging populations."

The researchers noted that different types of exercise, including walking, swimming, and strength training, all provided benefits, suggesting that the most important factor is consistency rather than the specific form of activity.

The study was funded by the National Institute on Aging and included collaboration from researchers at Harvard Medical School and the University of California, San Francisco.`,
    },
    {
      id: "real3",
      title: "Global Carbon Emissions Stabilize for Third Consecutive Year",
      content: `Global Carbon Emissions Stabilize for Third Consecutive Year

Global carbon dioxide emissions have stabilized for the third consecutive year, according to data released yesterday by the International Energy Agency (IEA).

The annual Global Energy and CO2 Status Report shows that worldwide CO2 emissions remained at 34.2 gigatons in 2023, unchanged from 2022 and 2021 levels, despite global economic growth of 3.1% last year.

"This marks a significant turning point in the global effort to combat climate change," said IEA Executive Director Fatih Birol. "For the first time, we're seeing a sustained decoupling of economic growth and carbon emissions across multiple years and across all major economies."

The report attributes the stabilization to several factors, including a 9.6% increase in renewable energy capacity, improved energy efficiency in industrial processes, and the continued shift from coal to natural gas and renewables in electricity generation.

China, the world's largest carbon emitter, saw its emissions decrease by 0.8% despite economic growth of 5.2%, primarily due to record deployment of solar and wind power. The United States recorded a 1.2% decrease in emissions, while the European Union saw a 2.1% reduction.

Dr. Joeri Rogelj, Director of Research at the Grantham Institute for Climate Change, who was not involved in producing the report, called the findings "cautiously encouraging" but emphasized that "stabilization is only the first step—we need actual reductions of about 7% annually to meet Paris Agreement goals."

The report also highlighted challenges, including increased emissions from the aviation sector as post-pandemic travel rebounded, and growing energy demands from artificial intelligence and data centers.

The IEA analysis was based on data from national statistics agencies, energy companies, and satellite observations, with methodologies peer-reviewed by climate scientists from multiple research institutions.`,
    },
  ],
  fake: [
    {
      id: "fake1",
      title: "BREAKING: Scientists Confirm 5G Networks Cause Mysterious Illness",
      content: `BREAKING: Scientists Confirm 5G Networks Cause Mysterious Illness

In a SHOCKING discovery that the mainstream media doesn't want you to know about, a group of independent scientists have FINALLY confirmed what many have suspected all along - 5G networks are directly causing a mysterious new illness affecting thousands worldwide!!!

Dr. James Richardson, a former telecommunications engineer turned health researcher, led the groundbreaking study that the big tech companies have been desperately trying to suppress. "The evidence is overwhelming and undeniable," Richardson stated in an exclusive interview. "The specific frequency used in 5G creates resonance patterns in human tissue that disrupt cellular communication."

The research team found that exposure to 5G signals for just 30 minutes can cause symptoms including headaches, dizziness, memory problems, and in some cases, more serious neurological effects. The study also suggests these networks may be weakening people's immune systems, making them more susceptible to other illnesses.

THOUSANDS of people living near 5G towers have reported these exact symptoms, yet government health agencies continue to ignore their suffering!!! One victim, Sarah Miller from Portland, described how her health "completely collapsed" after a 5G tower was installed near her home. "Within days, my whole family was sick. The doctors had no answers, but when we temporarily moved to my sister's house in a rural area with no 5G, all our symptoms disappeared."

The telecommunications industry has already launched a massive campaign to discredit the research, with several scientists receiving threats and one researcher reportedly having their lab funding mysteriously cut off.

A whistleblower from within the industry, who wishes to remain anonymous for safety reasons, confirmed that internal documents show companies have known about these health effects for years but buried the evidence to protect their trillion-dollar investment in the technology.

SHARE THIS ARTICLE BEFORE IT GETS TAKEN DOWN!!! The public deserves to know the TRUTH about what these dangerous networks are doing to our health!!!`,
    },
    {
      id: "fake2",
      title: "Secret Government Program Controlling Weather Causes Recent Floods",
      content: `Secret Government Program Controlling Weather Causes Recent Floods

EXCLUSIVE: The devastating floods that have ravaged the Midwest weren't natural disasters at all, but the direct result of a classified government weather control program code-named "Project Nimbus," according to leaked documents obtained by this reporter.

The top-secret program, operating from an underground facility in Wyoming, has been manipulating weather patterns across North America since 2015 using a network of high-powered electromagnetic transmitters. These transmitters, disguised as ordinary weather stations, can create, intensify, or redirect storm systems with pinpoint accuracy.

An anonymous insider with high-level security clearance provided documentation showing that Project Nimbus deliberately created the recent flooding as a "controlled test of hydrological response in populated river basins." The documents include detailed maps of targeted areas and rainfall projections that exactly match the actual flood patterns we've witnessed.

"They're playing God with our weather," said the source, who risks imprisonment for revealing this information. "The program was originally developed for military applications, but now they're using American communities as test subjects without consent."

Several meteorologists who reviewed the technical specifications contained in the leaked files confirmed that the technology described could indeed influence weather systems in the manner claimed, though none would go on record for fear of professional repercussions.

Dr. Harold Winters, a former NOAA scientist who was reportedly dismissed after questioning unusual weather data patterns, stated: "What we're seeing isn't natural. The intensification rates and movement patterns of these storm systems defy established meteorological principles."

The documents also reveal that Project Nimbus is just one component of a larger global weather modification initiative involving several world powers, explaining the unprecedented weather extremes experienced worldwide in recent years.

Government officials have vehemently denied the existence of weather control technology when questioned, and major media outlets have refused to cover the story despite being presented with the evidence.

Local flood victims are demanding answers. "If what these documents show is true, then the government owes us more than relief funds—they owe us the truth," said Robert Keller, who lost his home in the flooding.`,
    },
    {
      id: "fake3",
      title: "ALERT: Common Fruit Found to Cure Cancer in Days - Doctors Furious",
      content: `ALERT: Common Fruit Found to Cure Cancer in Days - Doctors Furious

In an ASTONISHING medical breakthrough that's sending shockwaves through the pharmaceutical industry, researchers have discovered that a common fruit available in every supermarket can cure cancer in just days!!! Big Pharma and oncologists are FURIOUS as their billion-dollar cancer treatment industry faces extinction!!!

The miracle fruit in question? The humble papaya! But not just any papaya - specifically, unripe papayas grown in volcanic soil contain an enzyme called "papacine" that has been shown to COMPLETELY ELIMINATE cancer cells while leaving healthy cells untouched.

This REVOLUTIONARY discovery was made by Dr. Michael Chen, a former cancer researcher who left the mainstream medical establishment after they tried to silence his work. "The results are unlike anything I've seen in 30 years of research," Dr. Chen stated. "In our clinical trials, stage 4 cancer patients showed 95% tumor reduction after just 14 days of treatment with concentrated papaya extract."

One patient, 54-year-old Linda Williams, was given just three months to live after being diagnosed with advanced pancreatic cancer. After beginning Dr. Chen's papaya protocol, her tumors completely disappeared within 11 days! "My oncologist couldn't believe it," Williams said. "He kept running tests because he thought the lab had made a mistake."

The medical establishment is desperately trying to suppress this information!!! The FDA has already raided Dr. Chen's clinic and confiscated his research, claiming he's making "unsubstantiated medical claims." Meanwhile, a major pharmaceutical company has quietly filed patents on synthetic versions of papacine, hoping to profit from this natural cure.

Cancer treatment is a $500 BILLION industry globally. Is it any wonder why doctors and drug companies don't want you to know about a cure that costs just pennies a day?

Dr. Robert Thompson, a holistic physician who has begun recommending the treatment to his patients, says, "The results I'm seeing defy conventional medical explanation. This could be the biggest health breakthrough of the century, but most doctors will never tell their patients about it because there's no money in it."

SHARE THIS LIFE-SAVING INFORMATION before it gets censored!!! The truth about this miracle cure must reach those who need it most!!!`,
    },
  ],
}

// Mock history data
const initialHistory = [
  {
    id: "1",
    title: "NASA's Webb Telescope Reveals Unprecedented View of Distant Galaxy",
    url: "Text analysis",
    credibilityScore: 85,
    date: "2023-04-15",
  },
  {
    id: "2",
    title: "BREAKING: Scientists Confirm 5G Networks Cause Mysterious Illness",
    url: "Text analysis",
    credibilityScore: 32,
    date: "2023-04-10",
  },
  {
    id: "3",
    title: "Study Finds Regular Exercise Reduces Risk of Cognitive Decline",
    url: "Text analysis",
    credibilityScore: 78,
    date: "2023-04-05",
  },
]

// Mock API call to detect fake news
const detectFakeNews = async (text: string): Promise<any> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // For demo purposes, we'll return different responses based on text content
  // In a real app, you would make an actual API call here

  // Check if the text matches any of our sample articles
  const allArticles = [...sampleArticles.real, ...sampleArticles.fake]
  const matchedArticle = allArticles.find(
    (article) => text.includes(article.title) || article.content.includes(text.substring(0, 50)),
  )

  if (matchedArticle) {
    // If it's one of our sample articles, return appropriate score
    const isReal = sampleArticles.real.some((article) => article.id === matchedArticle.id)
    const randomVariation = Math.floor(Math.random() * 10) // Add slight randomness

    if (isReal) {
      return {
        credibilityScore: 75 + randomVariation,
        classification: "reliable",
        reasons: [
          "Sources are properly cited and verifiable",
          "Balanced reporting of facts without sensationalism",
          "Author credentials are established",
          "Information is consistent with scientific consensus",
          "No excessive use of emotional language",
        ],
        title: matchedArticle.title,
      }
    } else {
      return {
        credibilityScore: 25 + randomVariation,
        classification: "unreliable",
        reasons: [
          "Limited or unverifiable sources",
          "Contains emotional or sensationalist language",
          "Makes extraordinary claims without extraordinary evidence",
          "Uses excessive punctuation or ALL CAPS for emphasis",
          "Presents conspiracy theories without credible evidence",
        ],
        title: matchedArticle.title,
      }
    }
  }

  // For any other text, provide a more generic analysis
  const wordCount = text.split(" ").length
  const hasExclamationMarks = (text.match(/!/g) || []).length > 3
  const hasAllCaps = (text.match(/[A-Z]{3,}/g) || []).length > 0
  const hasCitedSources = text.includes("study") || text.includes("research") || text.includes("according to")

  // Calculate a score based on these simple heuristics
  let score = 50 // Start at neutral
  if (wordCount < 50) score -= 10 // Too short to be credible news
  if (hasExclamationMarks) score -= 15 // Sensationalist punctuation
  if (hasAllCaps) score -= 15 // Sensationalist formatting
  if (hasCitedSources) score += 20 // Cites sources

  // Add random variation
  score += Math.floor(Math.random() * 20) - 10

  // Ensure score is within bounds
  score = Math.max(10, Math.min(score, 90))

  return {
    credibilityScore: score,
    classification: score > 70 ? "reliable" : score > 40 ? "questionable" : "unreliable",
    reasons: [
      score > 60 ? "Content appears to cite sources" : "Limited or no source citation",
      hasExclamationMarks ? "Contains sensationalist punctuation" : "Balanced tone in writing",
      hasAllCaps ? "Uses ALL CAPS for emphasis (tabloid technique)" : "Proper text formatting",
      wordCount > 200 ? "Provides substantial detail" : "Limited information provided",
      score > 50 ? "No obvious conspiracy theories detected" : "May contain unverifiable claims",
    ],
    title: text.split("\n")[0] || "Analyzed Article",
  }
}

export default function FakeNewsDetector() {
  const [articleText, setArticleText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState("")
  const [history, setHistory] = useState(initialHistory)
  const [sampleType, setSampleType] = useState("")

  const handleSampleSelect = (value: string) => {
    setSampleType(value)

    if (value.startsWith("real")) {
      const realArticle = sampleArticles.real.find((article) => article.id === value)
      if (realArticle) {
        setArticleText(realArticle.content)
      }
    } else if (value.startsWith("fake")) {
      const fakeArticle = sampleArticles.fake.find((article) => article.id === value)
      if (fakeArticle) {
        setArticleText(fakeArticle.content)
      }
    }
  }

  const handleAnalyze = async () => {
    setError("")
    setIsAnalyzing(true)
    setResult(null)

    try {
      // Validate input
      if (!articleText) {
        throw new Error("Please enter article text to analyze")
      }

      // Call the API
      const analysisResult = await detectFakeNews(articleText)
      setResult(analysisResult)

      // Add to history
      const newHistoryItem = {
        id: Date.now().toString(),
        title: analysisResult.title,
        url: "Text analysis",
        credibilityScore: analysisResult.credibilityScore,
        date: new Date().toISOString().split("T")[0],
      }

      setHistory([newHistoryItem, ...history])
    } catch (err: any) {
      setError(err.message || "An error occurred during analysis")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600"
    if (score >= 40) return "text-amber-600"
    return "text-red-600"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 70) return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Reliable</Badge>
    if (score >= 40) return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Questionable</Badge>
    return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Unreliable</Badge>
  }

  return (
    <Tabs defaultValue="text" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="text">
          <FileText className="mr-2 h-4 w-4" />
          Text Analysis
        </TabsTrigger>
        <TabsTrigger value="history">
          <History className="mr-2 h-4 w-4" />
          History
        </TabsTrigger>
      </TabsList>

      <TabsContent value="text">
        <Card>
          <CardHeader>
            <CardTitle>Analyze News Article</CardTitle>
            <CardDescription>Paste the content of a news article to analyze its credibility</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="article-text">Article Text</Label>
                <Textarea
                  id="article-text"
                  placeholder="Paste the article text here..."
                  className="min-h-[300px]"
                  value={articleText}
                  onChange={(e) => setArticleText(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setArticleText("")
                setSampleType("")
              }}
            >
              Clear
            </Button>
            <Button onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze"
              )}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="history">
        <Card>
          <CardHeader>
            <CardTitle>Analysis History</CardTitle>
            <CardDescription>View your previously analyzed articles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {history.length > 0 ? (
                history.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-3">
                    <div className="flex-1">
                      <h3 className="font-medium truncate">{item.title}</h3>
                      <p className="text-sm text-muted-foreground truncate">{item.url}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${getScoreColor(item.credibilityScore)}`}>
                        {item.credibilityScore}%
                      </span>
                      {getScoreBadge(item.credibilityScore)}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">No analysis history yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
            <CardDescription>Credibility assessment for the provided text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">{result.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-medium">Credibility Score:</span>
                  <span className={`text-xl font-bold ${getScoreColor(result.credibilityScore)}`}>
                    {result.credibilityScore}%
                  </span>
                  {getScoreBadge(result.credibilityScore)}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Credibility Meter</h4>
                <Progress
                  value={result.credibilityScore}
                  className="h-3"
                  style={{
                    background: `linear-gradient(to right, #ef4444, #f59e0b, #22c55e)`,
                  }}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Unreliable</span>
                  <span>Questionable</span>
                  <span>Reliable</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Analysis Factors</h4>
                <ul className="space-y-2">
                  {result.reasons.map((reason: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Info className="h-4 w-4 mt-0.5 text-blue-500" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Alert
                className={`
                ${
                  result.credibilityScore >= 70
                    ? "border-green-500 text-green-800"
                    : result.credibilityScore >= 40
                      ? "border-amber-500 text-amber-800"
                      : "border-red-500 text-red-800"
                }
              `}
              >
                {result.credibilityScore >= 70 ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : result.credibilityScore >= 40 ? (
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                )}
                <AlertTitle>
                  {result.credibilityScore >= 70
                    ? "This content appears reliable"
                    : result.credibilityScore >= 40
                      ? "Approach with caution"
                      : "This content may be misleading"}
                </AlertTitle>
                <AlertDescription>
                  {result.credibilityScore >= 70
                    ? "The article demonstrates good journalistic practices and credible sourcing."
                    : result.credibilityScore >= 40
                      ? "Some aspects of this article may be misleading or lack proper verification."
                      : "This article contains multiple red flags indicating potential misinformation."}
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      )}
    </Tabs>
  )
}

