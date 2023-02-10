const Materials = ({materials, title}) => {
    return ( 
        <div className="materialsList">
            <h2>{title}</h2>
            {materials.map((material) => (
                <div className="material" key={material.id}>
                    <h2>{material.name}</h2>
                    <p>has {material
                     .reviews} reviews. {material.materialIn}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Materials;