import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Next.js Theme App</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Welcome to Next.js with Theme Toggle</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This application demonstrates a complete theme system with light, dark, and system preference detection
              using React Context.
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary">Next.js 15</Badge>
              <Badge variant="secondary">React Context</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme Features</CardTitle>
                <CardDescription>Explore the theme functionality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Available Themes:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Light mode</li>
                    <li>• Dark mode</li>
                    <li>• System preference (default)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Persistent theme selection</li>
                    <li>• System theme detection</li>
                    <li>• Smooth transitions</li>
                    <li>• Accessible controls</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>How to use the theme toggle</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Instructions:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Click the theme toggle button in the header</li>
                    <li>2. Select your preferred theme option</li>
                    <li>3. The theme will be saved automatically</li>
                    <li>4. System theme follows your OS preference</li>
                  </ol>
                </div>
                <Button className="w-full">Explore More Features</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Theme Context Implementation</CardTitle>
              <CardDescription>Built with React Context and useContext hook</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  This application uses React Context to manage theme state across all components. The theme preference
                  is automatically detected from your system settings and persisted in localStorage for future visits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Built with Next.js, React Context, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
