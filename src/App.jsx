import { useState, useEffect } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCart, IoPersonCircle } from "react-icons/io5";
import Card from "./components/Card";
import { Modal } from "@mantine/core";
import MyModal from "./components/Modal";
import data from "./assets/data.json";
import { Grid } from "@mantine/core";
import { Button, Input, MultiSelect, Slider } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

function App() {
  const [modal, setModal] = useState(false);

  const formatTime = (val) => `${val}:00`;

  const [timevalue, setTimeValue] = useState(12);
  const [pricevalue, setPriceValue] = useState(0);
  const [groupvalue, setGroupValue] = useState(10);

  const [time, setTime] = useState(12);
  const [price, setPrice] = useState(0);
  const [group, setGroup] = useState(10);
  const [theme, setTheme] = useState([]);
  const [activity, setActivity] = useState([]);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [vehicle, setVehicle] = useState([]);
  const [features, setFeatures] = useState([]);

  const [filteredData, setFilteredData] = useState(data);

  const [pickuplocation, setPickupLocation] = useState("");
  const [dropofflocation, setDropoffLocation] = useState("");

  useEffect(() => {
    const newFilteredData = data.filter((item) => {
      return item.Category === "Tours";
    });
    setFilteredData(newFilteredData);
  }, []);

  const handleFilter = () => {
    const newFilteredData = data.filter((item) => {
      return (
        (category === "" || item.Category == category) &&
        (location === "" ||
          item.Location.toLowerCase().includes(location.toLowerCase())) &&
        (theme.length === 0 || theme.some((t) => item.Theme.includes(t))) &&
        (activity.length === 0 ||
          activity.some((a) => item.Activity.includes(a))) &&
        (price === 0 || item.Price <= price) &&
        (time === 12 || item.StartTime >= time) &&
        item.GroupSize <= group &&
        (vehicle.length === 0 || vehicle.includes(item.Vehicle)) &&
        (features.length === 0 ||
          features.some((f) => item.Features.includes(f)))
      );
    });
    console.log("Sonuç: ", newFilteredData);
    console.log("Hepsi", data);
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <div className="flex items-center justify-center z-50 fixed top-2 left-2 w-full justify-evenly flex-row">
        <div className="mt-6">
          <img src="/src/assets/logo.png" alt="" className="h-14" />
        </div>
        <div className=" bg-[#F2A945]  w-[90%] mt-8 rounded-xl p-3 flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <GiHamburgerMenu
              color="white"
              size={24}
              onClick={() => {
                setModal(true);
              }}
            />
          </div>
          <div className="flex flex-row gap-4">
            <FaHeart color="white" size={24} />
            <IoCart color="white" size={24} />
            <p className="text-white">Eda Çolak</p>
            <IoPersonCircle onClick={() => {}} color="white" size={24} />
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex items-center justify-center h-[70vh]"
          style={{
            backgroundImage: "url(/src/assets/island.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <h1 className="font-bold text-4xl mb-4 px-6 py-2">Fırsatlar</h1>
        <div className=" p-6 flex items-center justify-center">
          <Grid grow gutter="lg">
            {filteredData.map((item) => (
              <Grid.Col key={item.id} span={6}>
                <Card
                  tourname={item.TourName}
                  rating={item.Rating}
                  category={item.Category}
                  price={item.Price}
                  location={item.Location}
                  image={item.Image}
                />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>

      <Modal opened={modal} onClose={() => setModal(false)} size={"lg"}>
        <div className="h-screen">
          <p className="font-bold text-2xl mb-3 items-center justify-center flex flex-row">
            Filter
          </p>
          <div className="flex flex-row gap-4">
            <Button
              onClick={() => {
                setCategory("Tours");
              }}
              style={{
                backgroundColor: category === "Tours" ? "#E07516" : "#F2A945",
                borderRadius: 8,
              }}
              color="#F2A945"
            >
              Tours
            </Button>
            <Button
              onClick={() => {
                setCategory("Tickets");
              }}
              style={{
                backgroundColor: category === "Tickets" ? "#E07516" : "#F2A945",
                borderRadius: 8,
              }}
              color="#F2A945"
            >
              Tickets
            </Button>
            <Button
              onClick={() => {
                setCategory("Rent");
              }}
              style={{
                backgroundColor: category === "Rent" ? "#E07516" : "#F2A945",
                borderRadius: 8,
              }}
              color="#F2A945"
            >
              Rent
            </Button>
            <Button
              onClick={() => {
                setCategory("Transfer");
              }}
              style={{
                backgroundColor:
                  category === "Transfer" ? "#E07516" : "#F2A945",
                borderRadius: 8,
              }}
              color="#F2A945"
            >
              Transfer
            </Button>
          </div>

          {category == "Transfer" ? (
            <div>
              <p className="text-lg font-semibold mb-2 mt-2">Pickup Location</p>
              <Input
                rightSection={<CiSearch color="#F2A945" />}
                value={pickuplocation}
                onChange={(event) =>
                  setPickupLocation(event.currentTarget.value)
                }
              ></Input>
              <p className="text-lg font-semibold mb-2 mt-2">
                Drop Off Location
              </p>
              <Input
                rightSection={<CiSearch color="#F2A945" />}
                value={dropofflocation}
                onChange={(event) =>
                  setDropoffLocation(event.currentTarget.value)
                }
              ></Input>
            </div>
          ) : (
            <div>
              <p className="text-lg font-semibold mb-2 mt-2">Location</p>
              <Input
                rightSection={<CiSearch color="#F2A945" />}
                value={location}
                onChange={(event) => setLocation(event.currentTarget.value)}
              ></Input>
              <p className="text-lg font-semibold mb-2 mt-2">Theme</p>
              <MultiSelect
                data={["Adventure", "Romantic", "Family", "Relaxation"]}
                value={theme}
                onChange={setTheme}
              />
              <p className="text-lg font-semibold mb-2 mt-2">Activity</p>
              <MultiSelect
                data={[
                  "Snorkeling",
                  "Surfing",
                  "Hiking",
                  "Spa",
                  "Yoga",
                  "Massage",
                  "Safari",
                ]}
                value={activity}
                onChange={setActivity}
              />
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
              <MultiSelect
                data={["Yacht", "Speedboat", "Car", "Safari"]}
                value={vehicle}
                onChange={setVehicle}
              />
              <p className="text-lg font-semibold mb-2 mt-6">Features</p>
              <MultiSelect
                data={["Free Breakfast", "Free Lunch", "Free Dinner", "Pool"]}
                value={features}
                onChange={setFeatures}
              />
            </div>
          )}

          <div className="flex flex-row justify-end gap-4 mt-6 p-4">
            <Button
              onClick={() => {
                setCategory("");
                setLocation("");
                setTheme([]);
                setActivity([]);
                setPrice(0);
                setTime(12);
                setGroup(10);
                setVehicle([]);
                setFeatures([]);
              }}
              style={{ borderRadius: 8 }}
              color="#F2A945"
            >
              Reset
            </Button>
            <Button
              onClick={() => {
                handleFilter();
                setModal(false);
              }}
              style={{ borderRadius: 8 }}
              color="#F2A945"
            >
              Search
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
