import { Button } from "@/components/ui/button"

import { Logo } from "./logo"

export const Footer = () => {
  return (
    <div>
      <div className="flex items-center w-full p-6 bg-teal-700 z-50">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-slate-100">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-slate-100 bg-teal-700">
        <Button variant="ghost" size="sm">
          <a href="https://github.com/sync-lab-2023" target="_blank">
          Made with ❤️ by Team SyncLab</a>
        </Button>
      </div>
    </div>
  )
}