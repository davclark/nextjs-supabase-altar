export default function Footer({}) {
  return (
    <div className="footer">
    {/* At some point the idea is to make this easy for other communities to deploy... so we may want to bring back the deploy with vercel somewhere.
    For now, I'm leaving the Supabase call-out as a placeholder */}
      <div className=""></div>
      <div className="">
        <span className="text-sm">Powered by</span>
        <img src="logo.png" />
      </div>
      <div className="flex flex-end">
        {/*
        <a
          target="_blank"
          href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase%2Fsupabase%2Ftree%2Fmaster%2Fexamples%2Fnextjs-ts-user-management&project-name=supabase-user-management&repository-name=supabase-user-management&demo-title=Supabase%20User%20Management&demo-description=An%20example%20web%20app%20using%20Supabase%20and%20Next.js&demo-url=https%3A%2F%2Fsupabase-nextjs-ts-user-management.vercel.app&demo-image=https%3A%2F%2Fi.imgur.com%2FZ3HkQqe.png&integration-ids=oac_jUduyjQgOyzev1fjrW83NYOv&external-id=nextjs-user-management"
        >
          <img src="https://vercel.com/button" />
        </a>
        */}
      </div>
    </div>
  )
}
