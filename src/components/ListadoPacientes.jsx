/* eslint-disable react/prop-types */
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-2/3 lg:w-2/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-blac text-3xl text-center">ListadoPacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
        </p>
        {pacientes.map( paciente => (
          <Paciente 
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          /> 
        ))}
        </>
      ):(
        <></>
      )}

      
    </div>
  )
}
export default ListadoPacientes
