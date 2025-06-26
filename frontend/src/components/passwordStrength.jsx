

export default function PasswordStrengthMeter({password}) {

    // const getStrength = (pass) => {
    //     let strength = 0;
    //     if (pass.length >= 6) strength++;
    //     if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    //     if (pass.match(/\d/)) strength++;
    //     if (pass.match(/[^a-zA-Z\d]/)) strength++;
    //     return strength;
    // }
    const getStrength = (pass = '') => {
  let strength = 0;

  if (pass.length >= 6) strength++;                     // Length check
  if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;  // Upper & lower case
  if (/\d/.test(pass)) strength++;                      // Digit check
  if (/[^a-zA-Z\d]/.test(pass)) strength++;             // Special character check

  return strength;
};

    const strength = getStrength(password)
    
    const getStrengthText = (strength) => {
        if (strength === 0) return "very weak"
        if (strength === 1) return "weak"
        if (strength === 2) return "Fair"
        if (strength === 3) return "Good"
        return "Strong"
    }
    const getStrengthColor = (strength) => {
        if (strength === 0) return "bg-red-500";
        if (strength === 1) return "bg-red-400";
        if (strength === 2) return "bg-yellow-500";
        if (strength === 3) return "bg-yellow-400";
        return "bg-green-500"
    }

    return (
        <div className="mt-2 w-full">
            {/* the upper text */}
            <div className="flex justify-between items-center mb-1 w-full">
                <span className="text-xs text-gray-400"> Password Strength</span>
                <span className="text-xs text-gray-400"> {getStrengthText(strength)}</span>
            </div>

            {/* The Strength bar */}
            <div className="flex space-x-1 ">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${index < strength ? getStrengthColor(strength):'bg-gray-600' }`}
                    />
                ))}

            </div>


        </div>
    );
}