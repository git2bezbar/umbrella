import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default { title: 'Radio Group' };

export const BasicGroup = () => (
  <RadioGroup defaultValue="option-one">
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">My radio button</Label>
    </div>
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">My radio button</Label>
    </div>
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-three" id="option-three"/>
      <Label htmlFor="option-three">My radio button</Label>
    </div>
  </RadioGroup>
);

export const BasicGroupDisabled = () => (
  <RadioGroup defaultValue="option-one" disabled>
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">My radio button</Label>
    </div>
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">My radio button</Label>
    </div>
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-three" id="option-three" />
      <Label htmlFor="option-three">My radio button</Label>
    </div>
  </RadioGroup>
);

export const BasicGroupDisabledSingle = () => (
  <RadioGroup defaultValue="option-one">
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">My radio button</Label>
    </div>
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">My radio button</Label>
    </div>
    <div className="flex items-center gap-4">
      <RadioGroupItem value="option-three" id="option-three" disabled/>
      <Label htmlFor="option-three">My radio button</Label>
    </div>
  </RadioGroup>
);