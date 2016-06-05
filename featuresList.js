var app = angular.module('mlapp', []);
app.controller('featuresController', function () {
    features = [
        {
            name: '3D Acquisition: Aligning ',
            image: 'img/missing.png',
            description: 'The raw-data alignment phase (also known as referencing) is a fundamental step in the pipeline for processing 3D scanned data. MeshLab provides various tools for moving these acquisitions in a common reference system; among these, a standard approach is using a fine tuned ICP mesh-to-mesh alignment step, followed by a global error distribution step to manage large set of range-maps. The alignment step can be performed on data coming from several sources, including active (both short- and long-range) scanners and the results produced by 3D-from-image solutions (e.g. SfM).'
                            },
        {
            name: '3D Acquisition: Reconstruction',
            image: 'img/missing.png',
            description: 'The process of transforming independent acquisitions, or point clouds, in a triangulated model can be fulfilled with different algorithmic approaches. MeshLab provides several solutions to reconstruct the shape of an object, ranging from volumetric to implicit surfaces (Screened Poisson).'
                            },
        {
            name: '3D Acquisition: Texturing',
            image: 'img/missing.png',
            description: 'Color information may be as important as geometry, but several acquisition technologies do not provide accurate appearance data. MeshLab contains a pipeline for the alignment and projection of color information (encoded in a set of uncalibrated images) onto a 3D model. Several automatic and assisted methods are provided to obtain a high quality color encoding.'
                            },
        {
            name: 'Cultural Heritage:  Presentation and analysis',
            image: 'img/missing.png',
            description: 'A digital 3D model may be a very valuable mean to present and study an artifact. The visualization features of MeshLab (including Manipulators and Shaders) can help in showing the peculiar characteristics of a model. Moreover, processing and editing features (Geometric and Topological analysis, section, measurement) can help the user in extracting and exporting useful information.'
                            },
        {
            name: 'Cultural Heritage:  Preparing Models...',
            image: 'img/missing.png',
            description: 'Acquisition and reconstruction are only the first steps of the preparation of a 3D model. A number of additional processing may be needed to prepare a model for its use. MeshLab provides a variety of features to prepare a 3D model, including painting, geo referencing, manipulator, ambient occlusion, etc.'
                            },
        {
            name: '3D Printing:  Color Processing',
            image: 'img/missing.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            },
        {
            name: '3D Printing:  Cleaning Meshes',
            image: 'img/missing.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            },
        {
            name: '3D Printing: Offsetting and hollowing',
            image: 'img/missing.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            },
        {
            name: 'Raster Layers:integration with images',
            image: 'img/missing.png',
            description: 'Raster Layers have been introduced in MeshLab to allow to go beyond the standard 3D model. MeshLab users can import in a project also images and other 2D entities. These Raster Layers can be used not only to project color information on the 3D model, but also to generate peculiar points of view, or store an entire acquisition procedure by including also the images used for the generation of the final results.'
                            },
        {
            name: 'Comparing Meshes:',
            image: 'img/Feature/hausdorff.jpg',
            description: 'Measuring the Hausdorff Distance between two models is a common approach to compute the geometric difference between two 3D models; it is a quite common task in mesh processing. Many years ago (in 1997!), the Visual Computing Lab developed and freely distributed what become the standard tool for such task, Metro; the related paper has been cited more than one thousand times, thus demonstrating the impact of that work. While the original Metro tool was still a small open source standalone command line program (still available at our web site), MeshLab offers now much more advanced and versatile functionalities for comparing two meshes.'
                            },
        {
            name: 'Mesh Inspecting and Measuring',
            image: 'img/missing.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            },
        {
            name: 'Mesh Simplification and Refinement',
            image: 'img/missing.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            },
        {
            name: 'Mesh Conversion and interchange with other tools',
            image: 'img/missing.png',
            description: 'MeshLab can open and save a number of different 3D data formats. Moreover, interchange with other tools (including Blender, Photoscan, 3DCoat, VisualSfM) enables its use in the context of complex 3D processing pipelines in a number of different contexts and applications. The scripting functionalities will make this type of use even more easy and unattended.'
                            }

            ]
    this.features1 = features.splice(0, Math.ceil(features.length / 2));
    this.features2 = features;
});