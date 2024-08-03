"use client";
import { UserSkeleton } from "@/Components/home/skeletons";
import UserBar from "@/Components/home/UserBar";
import { Service, SubServices } from "@/lib/definitions";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/16/solid";
import { DevicePhoneMobileIcon, LightBulbIcon, TvIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Modal from "react-modal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";


const services: Service[] = [
    {   
        icon: UserCircleIcon, 
        serviceType: "Mobile Data", 
        subServices: [
            {serviceIcon: UserCircleIcon, serviceName:"data", subServiceType:"mtn"},
            {serviceIcon: UserCircleIcon, serviceName:"data", subServiceType:"airtel" },
            {serviceIcon: UserCircleIcon, serviceName:"data", subServiceType:"glo" },
            {serviceIcon: UserCircleIcon, serviceName:"data", subServiceType:"9moile" }
        ]
    },
    {   
        icon: DevicePhoneMobileIcon, 
        serviceType: "Airtime", 
        subServices: [
            {serviceIcon: UserCircleIcon, serviceName:"airetime", subServiceType:"mtn" },
            {serviceIcon: UserCircleIcon, serviceName:"airetime", subServiceType:"airtel" },
            {serviceIcon: UserCircleIcon, serviceName:"airetime", subServiceType:"glo" },
            {serviceIcon: UserCircleIcon, serviceName:"airetime", subServiceType:"9moile" }
        ]
    },
    {   
        icon: LightBulbIcon, 
        serviceType: "Electricity", 
        subServices: [
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"abuja-electric" },
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"eko-electric" },
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"ibadan-electric" },
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"ikeja-electric" },
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"jos-electric" },
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"kaduna-electric" },
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"kano-electric" },
            {serviceIcon: UserCircleIcon, serviceName:"electric", subServiceType:"portharcout-electric" }
        ]   
    },
    {   
        icon: TvIcon, 
        serviceType: "Cable TV", 
        subServices: [
            {serviceIcon: UserCircleIcon, serviceName:"cable", subServiceType:"gotv" },
            {serviceIcon: UserCircleIcon, serviceName:"cable", subServiceType:"dstv" },
            {serviceIcon: UserCircleIcon, serviceName:"cable", subServiceType:"startimes" },
        ]
    }
  ]

export default function Pricing({params}: {params: {User: string} }) {

    const {replace} = useRouter();

    const pathname = usePathname();

    const query = useSearchParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {

        const {serviceName, subServiceType} = {subServiceType: query.get("subServiceType"), serviceName: query.get("serviceName")}

        if(serviceName && subServiceType && typeof serviceName == "string" && typeof subServiceType == "string") {

            axios.get(`${pathname}/Price?serviceName=${serviceName}&subServiceType=${subServiceType}`)
                .then(response => {
                    console.log("res", response.status)
                    response.status == 200 && setData(response.data);
                })
                .catch(err => {
                    console.log("error", err)
                    setError(true)
                })
            
        }
    }, [params.User, pathname, query]);

    const [toggleState, setToggleState] = useState<{[key: string| number]: boolean}>({}); // Add type annotation

    const handleToggle = useCallback((index: string | number) =>{
        setToggleState((prevToggleState) => ({
            ...prevToggleState, [index]: !prevToggleState[index]
        }));
    }, []);

    const handleServiceClick = useCallback(
        (index: string | number, serviceName: string, subServiceType: string) =>{
        
        const queryParams = new URLSearchParams();

        queryParams.set("serviceName", serviceName);
        queryParams.set("subServiceType", subServiceType);
        
        replace(`${pathname}?${queryParams.toString()}`);


    }, [replace, pathname]);

    const handleModalClose = () => {
        setData(null)
        replace(`${pathname}`);
    }
    const floating_modal: Modal.Styles = {
        overlay: {
          backgroundColor: "transparent",
          position: "absolute",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          paddingTop: "10%",
          height: "100vh",
          width: "100vw",
        },
        content: {
            padding: "20px",
        },
      }

    return (
    <section className="w-full h-screen max-w-screen-sm items-center flex flex-col px-2 flex-wrap pt-24">

        <section className="user-contain" >
            <Suspense fallback={<UserSkeleton/>}>
                <UserBar username={params.User}/>
            </Suspense>
        </section>

        <ul className="price-bar">
            {services.map((service: Service, index: number) => (
                <>
                    <li onClick={() => handleToggle(index)} key={index} className="category">
                        <div className="price-icon">
                            <service.icon className='icon'/>
                        </div>
                        <div className="two-price-flex">
                            <p className="text-nowrap">{service.serviceType}</p>
                            <span> 
                                {toggleState[index] ? 
                                    <ArrowUpIcon className='icon'/> : 
                                    <ArrowDownIcon className='icon'/>
                                } 
                            </span>
                        </div>
                    </li>
                    <li className={toggleState[index] ? "show" : "hidden"}>
                        <ul className={service.serviceType=="Cable TV" ? "tv-sub-category" : "sub-category"}>
                            {service.subServices.map((subService: SubServices, index: number) => (
                                <>
                                    <li 
                                        onClick={()=> handleServiceClick(index, 
                                            subService.serviceName, 
                                            subService.subServiceType)} 
                                        key={index} className="price-icon">
                                        <subService.serviceIcon className='icon'/>
                                    </li>
                                    <Modal  
                                        className={"sm:w-[70%] md:w-[60%] lg:w-[45%] w-[93%] h-[61%] border border-mountain-meadow-300 rounded-2xl bg-mountain-meadow-100 dark:bg-mountain-meadow-600 max-w-screen-sm text-slate-700"}
                                        isOpen={data ? true : false}
                                        ariaHideApp={false}
                                        onRequestClose={handleModalClose}
                                        contentLabel="Modal"
                                        style={floating_modal}
                                        >
                                        <h1>WHAT THE HELL</h1>
                                        <div>
                                            Hello World
                                            {subService.serviceName}
                                        </div>
                                    </Modal>
                                </>
                            ))}
                        </ul>
                    </li>
                </>
            ))}
        </ul>

    </section>
    );
}