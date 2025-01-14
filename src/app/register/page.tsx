import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Register | MoonMatch",
  description: "Create your MoonMatch account",
}

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-600" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="text-2xl font-bold">MoonMatch</Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Join our growing community of innovators and established businesses, 
              where collaboration drives success.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Choose your account type to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="startup" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="startup">Startup</TabsTrigger>
                  <TabsTrigger value="sme">SME</TabsTrigger>
                </TabsList>
                <TabsContent value="startup">
                  <RegisterForm type="startup" />
                </TabsContent>
                <TabsContent value="sme">
                  <RegisterForm type="sme" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}