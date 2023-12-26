

const App = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    console.log('Selected value:', value);
    // Perform any additional actions on radio button selection
  };

  const radioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <div>
      <Stage width={3000} height={1000}>
        <RadioGroup
          options={radioOptions}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
      </Stage>
    </div>
  );
};

export default App;



