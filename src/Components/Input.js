const Input = ({imageUrl, name,city,position,setInputData}) => {
  return (
    <>
          <input
            type="text"
            placeholder="Please input image url"
            value={imageUrl}
            onChange={(e) => {
              e.preventDefault();
              setInputData((pre) => ({
                ...pre,
                imageUrl: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            placeholder="Please input your name"
            value={name}
            onChange={(e) => {
              e.preventDefault();
              setInputData((pre) => ({
                ...pre,
                name: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            placeholder="Please input your city"
            value={city}
            onChange={(e) => {
              e.preventDefault();
              setInputData((pre) => ({
                ...pre,
                city: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            placeholder="Please input your position"
            value={position}
            onChange={(e) => {
              e.preventDefault();
              setInputData((pre) => ({
                ...pre,
                position: e.target.value,
              }));
            }}
          />
    </>
  )
}

export default Input