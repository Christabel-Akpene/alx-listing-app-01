import { HOUSETYPES } from "@/constants/index_1";

const HouseType = () => {
  return (
        <div className="flex space-x-4 my-4 overflow-x-auto no-scrollbar px-6 lg:items-center lg:justify-center ">
        {
            HOUSETYPES.map(({icon, name}) => {
                return (
                    <div key={name} className="flex flex-col items-center space-y-2">
                        <div className="text-2xl">
                            {icon}
                        </div>
                        <p className="text-sm text-ring whitespace-nowrap">{name}</p>
                    </div>
                )
            })
        }
      </div>
  )
}

export default HouseType
