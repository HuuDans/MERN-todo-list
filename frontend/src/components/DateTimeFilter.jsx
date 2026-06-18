import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox";
import { options } from "@/lib/data";
import { Button } from "./ui/button";

const optionValues = options.map((option) => option.value);

const getOptionLabel = (value) =>
  options.find((option) => option.value === value)?.label ?? value;

const DateTimeFilter = ({ dateQuery, setDateQuery }) => {
  return (
    <Combobox
      items={optionValues}
      value={dateQuery}
      onValueChange={(value) => {
        if (value) {
          setDateQuery(value);
        }
      }}
      itemToStringLabel={getOptionLabel}
      filter={null}
    >
      <ComboboxTrigger
        render={
          <Button
            size="lg"
            variant="outline"
            className="w-32 justify-between font-normal"
          />
        }
      >
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList>
          {(value) => (
            <ComboboxItem key={value} value={value}>
              {getOptionLabel(value)}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default DateTimeFilter;
