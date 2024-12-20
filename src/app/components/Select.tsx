import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectType {
  label?: string;
  list?: any;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const SelectBox: React.FC<SelectType> = ({ label, list, placeholder, onChange }) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="font-bold text-[#112950]">
        {label}
      </label>
      <Select onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder && placeholder} />
        </SelectTrigger>
        <SelectContent>
          {list &&
            list?.map((item: any, index: number) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;
