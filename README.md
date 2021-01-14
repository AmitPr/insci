# INSCI  
The \[In\]teractive \[S\]cientific \[C\]omputing \[I\]nterface  

---
INSCI is an extremely lightweight jupyter notebook-like environment that lives solely in the browser. While Jupyter Notebooks require a python backend to be running on the host computer, INSCI is self-contained, and can be deployed on any site as a static set of files. INSCI is developed using Typescript and styled using LESS. The backbone of INSCI is the [INSCI-notebook](https://github.com/AmitPr/insci-notebook), which contains the logic for the notebook cells, their execution, and the robust plugin API that the INSCI environment is built off of.

## Installation
You can clone and run INSCI on your own machine!
```bash
git clone https://github.com/AmitPr/insci
cd insci && npm i
npm run pack
```

## Usage
INSCI is currently in heavy development, and as such, can only be run by opening the `index.html` file in the distribution folder.

## Credits
INSCI is developed and maintained by [Amit Prasad](https://github.com/AmitPr).