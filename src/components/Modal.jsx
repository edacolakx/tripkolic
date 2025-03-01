import { Button, Input, MultiSelect, Slider } from "@mantine/core";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function MyModal() {
  const formatTime = (val) => `${val}:00`;

  const [timevalue, setTimeValue] = useState(12);
  const [pricevalue, setPriceValue] = useState(0);
  const [groupvalue, setGroupValue] = useState(10);

  const [time, setTime] = useState(12);
  const [price, setPrice] = useState(0);
  const [group, setGroup] = useState(10);
  return (
    <>
      <div className="h-screen">
        <p className="font-bold text-2xl mb-3 items-center justify-center flex flex-row">
          Filter
        </p>
        <div className="flex flex-row gap-4">
          <Button style={{ borderRadius: 8 }} color="#F2A945">
            Tours
          </Button>
          <Button style={{ borderRadius: 8 }} color="#F2A945">
            Tickets
          </Button>
          <Button style={{ borderRadius: 8 }} color="#F2A945">
            Rent
          </Button>
          <Button style={{ borderRadius: 8 }} color="#F2A945">
            Transfer
          </Button>
        </div>

        <p className="text-lg font-semibold mb-2 mt-2">Location</p>
        <Input rightSection={<CiSearch color="#F2A945" />}></Input>
        <p className="text-lg font-semibold mb-2 mt-2">Theme</p>
        <MultiSelect data={["React", "Angular", "Vue", "Svelte"]} />
        <p className="text-lg font-semibold mb-2 mt-2">Activity</p>
        <MultiSelect data={["React", "Angular", "Vue", "Svelte"]} />
        <p className="text-lg font-semibold mb-2 mt-2">Price </p>
        <div className="flex flex-row w-full items-center justify-between">
          <Slider
            color="#F2A945"
            min={0}
            max={25000}
            value={pricevalue}
            onChange={setPriceValue}
            onChangeEnd={setPrice}
            className="w-[90%]"
          />
          <p className="text-sm border-1 p-1">{price}</p>
        </div>
        <p className="text-lg font-semibold mb-2 mt-4">Start Time</p>
        <div className="flex flex-row w-full items-center justify-between">
          <Slider
            color="#F2A945"
            min={0}
            max={23}
            step={1}
            label={formatTime}
            value={timevalue}
            onChange={setTimeValue}
            onChangeEnd={setTime}
            className="w-[90%]"
            marks={[
              { value: 0, label: "00:00" },
              { value: 6, label: "06:00" },
              { value: 12, label: "12:00" },
              { value: 18, label: "18:00" },
              { value: 23, label: "23:00" },
            ]}
          />
          <p className="text-sm border-1 p-1">{formatTime(time)}</p>
        </div>
        <p className="text-lg font-semibold mb-2 mt-6">Group Size</p>
        <div className="flex flex-row w-full items-center justify-between">
          <Slider
            color="#F2A945"
            min={0}
            max={100}
            value={groupvalue}
            onChange={setGroupValue}
            onChangeEnd={setGroup}
            className="w-[90%]"
          />

          <p className="text-sm border-1 p-1">{group}</p>
        </div>
        <p className="text-lg font-semibold mb-2 mt-6">Vehicle</p>
        <MultiSelect data={["React", "Angular", "Vue", "Svelte"]} />
        <p className="text-lg font-semibold mb-2 mt-6">Features</p>
        <MultiSelect data={["React", "Angular", "Vue", "Svelte"]} />

        <div className="flex flex-row justify-end gap-4 mt-6 p-4">
          <Button style={{ borderRadius: 8 }} color="#F2A945">
            Reset
          </Button>
          <Button style={{ borderRadius: 8 }} color="#F2A945">
            Search
          </Button>
        </div>
      </div>
    </>
  );
}

export default MyModal;
