var app = angular.module('mlapp', []);
app.controller('featuresController', function () {
    features = [
        {
            name: '3D Acquisition: Aligning ',
            image: 'img/Feature/Alignment.jpeg',
            description: 'The 3D data alignment phase (also known as registration) is a fundamental step in the pipeline for processing 3D scanned data. MeshLab provides a powerful tool for moving the different meshes into a common reference system, able to manage large set of range-maps. MeshLab implements a fine tuned ICP one-to-one alignment step, followed by a global bundle adjustment error-distribution step. The alignment can be performed on meshes and point clouds coming from several sources, including active (both short- and long-range) scanners and 3D-from-image tools.'
                            },
        {
            name: '3D Acquisition: Reconstruction',
            image: 'img/missing.png',
            description: 'The process of transforming independent acquisitions, or point clouds, into a single-surface triangulated mesh can be fulfilled with different algorithmic approaches. MeshLab provides several solutions to reconstruct the shape of an object, ranging from volumetric (Marching Cube) to implicit surfaces (Screened Poisson).'
                            },
        {
            name: '3D Acquisition: Color Mapping and Texturing ',
            image: 'img/Feature/Texturing.jpeg',
            description: 'Color information may be as important as geometry, but several acquisition technologies do not provide accurate appearance data. MeshLab contains a pipeline for the alignment and projection of color information (from a set of uncalibrated images) onto a 3D model. Several automatic and assisted methods are provided to obtain a high quality color encoding, with both per-vertex or texture mapping.'
                            },
        {
            name: 'Cleaning 3D Models',
            image: 'img/Feature/Cleaning.jpeg',
            description: 'MeshLab offers a series of automatic, semi-manual and interactive filters to remove those geometric element generally considered “wrong” by most software and algorithms. It is possible to removing topological errors, duplicated and unreferenced vertices, small components, degenerated or intersecting faces, and many more geometrical and topological singularities. Using different automatic and interactive selection methods, is then possible to isolate and remove unwanted areas of your meshes and point clouds.'
                            },
        {
            name: 'Scaling, Positioning and Orienting 3D Models',
            image: 'img/missing.png',
            description: '3D models, especially coming from survey and scanning, often need to be re-oriented, or placed in a specific reference system; additionally, if they have been generated from 3d-from-photos, they generally need scaling to become metric. MeshLab provides a variety of features to manipulate the scale, positioning and orientation of a 3D model, including basic transformation operations like translation/scaling/rotation, automatic re-centering and alignment to axis, geo-referencing with reference points, interactive manipulators for rotation/translation/scaling, and many others.'
                            },
        {
            name: '3D Models Simplification, Refinement and Remeshing',
            image: 'img/missing.png',
            description: 'A common need when processing a 3D model is to reduce its geometric complexity, creating a geometry with the same shape but with less triangles (or points). MeshLab offers different ways to simplify (decimate) triangulated surfaces, able to preserve geometrical detail and texture mapping, or to selectively reduce the number of points in a pointcloud. In other cases, the user may want to increase the number of triangles (or points): MeshLab also provides different subdivision schemes, remeshing and resampling filters to increase geometric complexity of 3D models, or to optimize point distribution and triangulation quality.'
                            },
        {
            name: 'Measurement, and Analysis',
            image: 'img/Feature/Simplification.jpeg',
            description: 'Interactive point-to-point measurement of a 3D model is really easy in MeshLab. Moreover, automatic filters will return various geometric and topological information about your 3D model (or just of a selected area), while the Sectioning tool can export cut-through sections of a mesh as polylines. Different geometric information (like curvature, geodesic distance, or local vertex density) may be calculated on meshes and 3D models using automatic filters.'
                            },
        {
            name: 'Visualization and Presentation',
            image: 'img/missing.png',
            description: 'The visualization features of MeshLab (including Decorators and Shaders) can help in graphically present the peculiar characteristics of a 3D model. It is possible to control the camera perspective/orthographic view parameters, and use predefined canonical views. MeshLab also offers a high-resolution screenshot feature, extremely useful in creating a graphical documentation of a survey.'
                            },
        {
            name: 'Color Processing',
            image: 'img/missing.png',
            description: 'MeshLab can manipulate the vertex and face colors of the 3D model using a series of photoshop-like filters (gamma, saturation, brightness, contrast, levels, smoothing, sharpening). Automatic filters are available to calculate Ambient Occlusion and Volumetric Obscurance and map it to vertex or face color. It is also possible to explicitly write color function, to highlight specific characteristics of the 3d model. MeshLab also offer a painting interface for vertex colors. Scalar values, possibly the result of a metric calculation on the 3D surface, may also be mapped on vertex/face color, to have a visual representation of that value.'
                            },
        {
            name: '3D Printing: Offsetting, hollowing, closing, flattening',
            image: 'img/missing.png',
            description: 'Beside being able to export to STL (one of the most common formats for 3D printing), MeshLab can be used to prepare 3D models for printing by creating inner shells, resampling/remeshing the 3D model to make slicing easier, closing small holes to obtain watertight meshes, and flattening the bottom area to have a better platform adherence.'
                            },
        {
            name: 'Comparing Models',
            image: 'img/Feature/Comparing.jpeg',
            description: 'Measuring the geometric difference between two 3D models using Hausdorff Distance is a common approach in mesh processing. Many years ago (in 1997!), the Visual Computing Lab developed and freely distributed what become the standard tool for such task, Metro; the related paper has been cited more than one thousand times, thus demonstrating the impact of that work. While the original Metro tool was still a small open source standalone command line program (still available at our web site), MeshLab offers now much more advanced and versatile functionalities for comparing two meshes, that also compute signed distance and may work on point clouds.'
                            },
        {
            name: '3D Models Conversion and Interchange with other Tools',
            image: 'img/missing.png',
            description: 'MeshLab can import and export a number of different 3D data formats. In this way it is possible for the user to interchange data with other tools (including Blender, Photoscan, VisualSfM, Cloud Compare, Autodesk tools), working in the context of complex 3D processing pipelines in a number of different contexts and applications. The scripting functionalities will make this type of use even easier and unattended.'
                            },
        {
            name: 'Raster Layers: integration with images',
            image: 'img/Feature/raster.jpeg',
            description: 'Raster Layers have been introduced in MeshLab to allow to go beyond the standard 3D model. MeshLab users can import in a project also images and other 2D entities. These Raster Layers can be used not only to project color information on the 3D model, but also to generate peculiar points of view, or store an entire 3d-from-image acquisition procedure by including also the images used for the generation of the final results.'
                            }


            ]
    this.features1 = features.splice(0, Math.ceil(features.length / 2));
    this.features2 = features;
});