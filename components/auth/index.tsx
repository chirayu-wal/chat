"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{isLogin ? "Login" : "Sign Up"}</CardTitle>
          <CardDescription>
            {isLogin ? "Enter your email below to login to your account" : "Enter your email below to sign up to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
                {!isLogin && (
                     <div className="grid gap-2">
                     <Label htmlFor="name">Name</Label>
                     <Input
                       id="name"
                       type="text"
                       placeholder="John Doe"
                       required
                     />
                   </div>
                )}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                {isLogin ? "Login" : "Sign Up"}
              </Button>
              <Button variant="outline" className="w-full">
                {isLogin ? "Login with Google" : "Sign Up with Google"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {isLogin   ? `Don&apos;t have an account?` : `Already have an account?`}
              <Button type="button" onClick={() => setIsLogin(!isLogin)} variant="link" className="underline underline-offset-4">
                {isLogin ? "Sign up" : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
