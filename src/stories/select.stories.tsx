import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default { title: 'Select' };

export const Basic = () => (
  <Select>
    <SelectTrigger className="w-[300px]">
      <SelectValue placeholder="Select a theme for your website" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Umbrella UI</SelectItem>
      <SelectItem value="banana">Umbrella Light</SelectItem>
      <SelectItem value="blueberry">Dark Umbrella</SelectItem>
      <SelectItem value="grapes">Umbrella Reverse</SelectItem>
      <SelectItem value="pineapple">S.T.A.R.S.</SelectItem>
    </SelectContent>
  </Select>
);

export const Disabled = () => (
  <Select disabled>
    <SelectTrigger className="w-[300px]">
      <SelectValue placeholder="Select a theme for your website" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="umbrella-ui">Umbrella UI</SelectItem>
      <SelectItem value="umbrella-light">Umbrella Light</SelectItem>
      <SelectItem value="dark-umbrella">Dark Umbrella</SelectItem>
      <SelectItem value="umbrella-reverse">Umbrella Reverse</SelectItem>
      <SelectItem value="stars">S.T.A.R.S.</SelectItem>
    </SelectContent>
  </Select>
);
