import { IoCheckmark } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";


export default function PasswordCriteria ({ password = ''}) {
    
    const criteria = [
        { label: "At least 6 characters", met: password.length >= 6 },
        { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
        { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
        { label: "Contains a number", met: /\d/.test(password) },
        { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },

    ]
    return (
        <div className="mt-2 space-y-1 w-full">
            {criteria.map((item) => (
                <div key={item.label} className="flex items-center text-md">
                    {item.met ? (<IoCheckmark className="size-4 text-green-500 mr-2" />)
                        : (<IoIosClose className="size-4 text-gray-500 mr-2" />)}
                    <span className={item.met ? 'text-green-500' : 'text-gray-500'}>
                        {item.label}

                    </span>
                </div>

            ))}

        </div>
    )
}