import { Input } from '@material-tailwind/react';
import searchIcon from '../../../assets/admin-interface/icons/field/search.svg';

export default function SearchBarDefault({
    value = '',      
    placeholder = 'Search in Records',
    onChange = () => {}
}) {
    return (
        <div className="fixed top-0 -right-10 mt-4 mr-4 md:mr-20 py-2">
            <div className="relative">
                <div className="w-80">
                    <Input 
                        label=''
                        color="blue-gray"
                        icon={
                            <img 
                                src={searchIcon} 
                                alt="Search" 
                                className="cursor-pointer" 
                            />
                        }
                        className={`border focus:border-2 !border-blue-gray-500 rounded-full`}
                        labelProps={{
                            className: "before:content-none after:content-none ",
                        }}
                        placeholder={placeholder}
                        value={value}  
                        onChange={(e) => onChange(e.target.value)}
                    /> 
                </div>
            </div>
        </div>
    );
}
