import { SiteHeader } from '@/components/site-header'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { Hero } from '@/components/hero'
import { FeaturedProject } from '@/components/featured-project'
import { ToolsSection } from '@/components/tools-section'
import { ProjectDetails } from '@/components/project-details'
import { FeedbackSection } from '@/components/feedback-section'
import { SiteFooter } from '@/components/site-footer'
import { getFeedbackStats } from '@/app/actions/feedback'

export default async function Page() {
  const stats = await getFeedbackStats()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <ProfileSidebar />
          <div className="flex flex-col gap-6">
            <Hero />
            <FeaturedProject />
            <ToolsSection />
          </div>
        </div>
        <ProjectDetails />
        <FeedbackSection stats={stats} />
      </main>
      <SiteFooter />
    </div>
  )
}
