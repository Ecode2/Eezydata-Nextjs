import "@/styles/Home.css";

const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-mountain-meadow-500 before:via-mountain-meadow-300 before:to-mountain-meadow-400';

export function UserSkeleton() {
  return (
    <nav className="user-bar">
        
      <div className="two-flex">
          <div className='skel-icon'/> 
          <div className='lg-icon-txt'/>
      </div>

    <div className="user-contact">
        <div className="icon-contain">
          <div className='skel-icon'/> 
        </div>

        <div className="icon-contain">
          <div className='skel-icon'/> 
        </div>
    </div>
    </nav>
)
}
export function AccountSkeleton() {
  return (

    <ul className="skel-account-bar">
        <li className="account-info">
            <div className="account-num gap-2">
                <div className='account-icon-txt'/>
                <div className="show-hide">
                    <div className='icon-txt'/>
                    <div className='icon-box'/>
                </div>
            </div>
            <button className="skel-btn"><div className='icon-txt'/></button>
        </li>

        <li className="account-info">
            <div className='two-flex'> 
                <div className='xl-icon-txt'/>
                <div className='icon-box'/>
            </div>
            <div className='xl-icon-txt pd-x3'/>
        </li>

        <li className="account-info">
          <div className='xxl-icon-txt'/>
          <div className='xl-icon-txt pd-x3'/>
        </li>
    </ul>

)
}
export function ActionSkeleton() {
  return (
    <div className="action-bar">
        <IconLayout/>

        <IconLayout/>

        <IconLayout/>
    </div>
)
}
export function ServiceSkeleton() {
  return (<ul className="service-bar">
            <li><IconLayout/></li>

            <li><IconLayout/></li>

            <li><IconLayout/></li>

            <li><IconLayout/></li>

            <li><IconLayout/></li>

            <li><IconLayout/></li>
          </ul>)
}

export default function HomeSkeleton() {
    return (

      <section className="w-full h-screen max-w-screen-sm items-center flex flex-col flex-wrap gap-y-10">

        <section className="user-contain">
            <UserSkeleton/>
        </section>
        
        <section className="w-full px-2 pt-20 ">
            <AccountSkeleton/>
        </section>

        <div className="action-contain">
            <ActionSkeleton/>
        </div>

        <section className="service-contain">
            <ServiceSkeleton/>
        </section>

    </section>
    );
  }


export function PriceSkeleton() {
    return(
        <main></main>
    )
}

const IconLayout = () => {
  return(
    <div className="skel-icon-contain">
        <div className='skel-icon'/>
        <div className='icon-txt'/>
    </div>
  )
}

export function MenuSkeleton() {
    return(
      <footer className="skel-menu-bar">
            <IconLayout/>

            <IconLayout/>

            <IconLayout/>

            <IconLayout/>
        </footer>
    )
}