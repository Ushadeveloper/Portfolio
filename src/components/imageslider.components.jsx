import { useState } from 'react';
import { imagelists } from '../data';
function ImagesSlider() {

    const [count, setCount] = useState(0);

    function nextClick() {
        if (count < imagelists.length - 1) {
            setCount(count + 1);

        }
        else {
            setCount(count)

        }
    }
    function previousClick() {
        if (count > 0)
            setCount(count - 1);
    }
    // const showIndex = (e)=>{
    //     imagelists
    // }
    // const handleImageClick = () => {
    //     <i><strong>{count}</strong></i>


    // }
   

    let images = imagelists[count];
    return (
        <>

            <div style={{
                backgroundColor: 'lightblue',
                position: 'absolute',
                height: 500,
                width: 500,
                justifyContent: 'center',
                marginLeft:400

            }}>

                <h2>
                <i><strong>{count}</strong></i>

                </h2>
                <h3>
                    ({count + 1} of {imagelists.length})
                </h3>


                {/* <button onClick={handleImageClick} style={{borderRadius: 300,
                        height: 500,
                        width: 500}}>    */}
                        
                            <img

                    style={{
                        borderRadius: 300,
                        height: 300,
                        width: 300
                    }}
                    src={images.url}
                    alt={images.alt}

                />
                {/* </button> */}


                <br />
                <button style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10%'
                }} onClick={nextClick}>
                    Next
                </button>

                <button style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10%'
                }} onClick={previousClick}>
                    Back
                </button>

            </div>
        </>
    );
}
export default ImagesSlider;