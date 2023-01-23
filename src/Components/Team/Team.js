import React from 'react';
import person1 from '../../Assets/person-1.jpg';
import person2 from '../../Assets/person-2.jpg';
import person3 from '../../Assets/person-3.jpg';
import person4 from '../../Assets/person-4.jpg';

const Team = () => {
    return (
        <div className='mb-20'>
            <h1 className='mt-20 md:text-3xl lg:text-5xl font-bold text-center '>Our team</h1>
            <div className='flex items-center justify-center'>
                <div className="divider w-1/12 mb-5 divide-red-400 text-center"></div>
            </div>
            {/* Card-1 */}
            <div className='mx-5 md:mx-10 lg:mx-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                <div className="card bg-base-100">
                    <figure><img src={person1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">RWilliam Gabriel</h2>
                        <p>Team expert</p>
                    </div>
                </div>

                {/* Card -2 */}
                <div>
                    <div className="card bg-base-100">
                        <figure><img src={person2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Adam Joseph</h2>
                            <p>Team expert</p>

                        </div>
                    </div>
                </div>


                {/* Card -3 */}
                <div>
                    <div className="card bg-base-100">
                        <figure><img src={person3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">James Carter</h2>
                            <p>Team expert</p>

                        </div>
                    </div>
                </div>

                {/* Card -4 */}
                <div>
                    <div className="card bg-base-100">
                        <figure><img src={person4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kelian Anderson</h2>
                            <p>Team expert</p>

                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Team;