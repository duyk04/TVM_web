var listProjects = [
    {
        id: 1,
        img: '../img/work/Layer 10.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 2,
        img: '../img/work/Layer 11.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 3,
        img: '../img/work/Layer 12.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 4,
        img: '../img/work/Layer 13.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 5,
        img: '../img/work/Layer 14.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 6,
        img: '../img/work/Layer 15.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 7,
        img: '../img/work/Layer 16.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 8,
        img: '../img/work/Layer 17.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    
];
for (let i = 0; i < listProjects.length; i++) {
    var view = `<div class="col-md-3">
                    <div class="card mb-5">
                        <div class="position-relative">
                            <img src="${listProjects[i].img}" class="card-img-top" alt="...">
                            <div class="align-items-end position-absolute w-100 h-100 top-0 start-0 d-none overlay">
                                <div class="ms-3">
                                    <p class="text-white mb-0">For more information</p>
                                    <h3 class="text-white">Contasct Us<i class="fa-solid fa-arrow-right fa-xs text-white ps-2"></i></h3>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                        <p class="card-text text-center">${listProjects[i].content}</p>
                        </div>
                    </div>
                </div>`;
    $('.list-projects').append(view)
}