
// eslint-disable-next-line react/prop-types
const Error = ({mensaje}) => {
  return (
    <div className='font-bold rounded-md bg-red-800 text-white text-center p-3 uppercase mb-3'>
    <p>{mensaje}</p>
</div>
  )
}

export default Error