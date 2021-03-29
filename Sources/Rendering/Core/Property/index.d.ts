import { VtkObject } from "vtk.js/Sources/macro";

export enum Shading {
    FLAT,
    GOURAUD,
    PHONG,
}

export enum Representation {
    POINTS,
    WIREFRAME,
    SURFACE,
}

export enum Interpolation {
    FLAT,
    GOURAUD,
    PHONG,
}

interface IPropertyValues {

    /**
     * 
     */
    color: number[];

    /**
     * The ambient surface color.
     */
    ambientColor: number[];

    /**
     * The diffuse surface color.
     */
    diffuseColor: number[];

    /**
     * The specular surface color.
     */
    specularColor: number[];

    /**
     * The color of primitive edges
     */
    edgeColor: number[];

    /**
     * The lighting coefficient.
     */
    ambient: number;

    /**
     * The diffuse lighting coefficient.
     */
    diffuse: number;

    /**
     * The specular lighting coefficient.
     */
    specular: number;

    /**
     * The specular power.
     */
    specularPower: number;

    /**
     * The object’s opacity. 1.0 is totally opaque 
     * and 0.0 is completely transparent.
     */
    opacity: number;

    /**
     * The visibility of edges.
     */
    edgeVisibility: boolean;

    /**
     * 
     */
    backfaceCulling: boolean;

    /**
     * 
     */
    frontfaceCulling: boolean;

    /**
     * 
     */
    pointSize: number;

    /**
     * 
     */
    lineWidth: number;

    /**
     * Lighting flag for an object. 
     * @default true
     */
    lighting: boolean;

    /**
     * 
     */
    shading: boolean;
}

export interface vtkProperty extends VtkObject {


    /**
     * Not Implemented yet
     */
    addShaderVariable(): any;

    /**
     * Not Implemented yet
     */
    computeCompositeColor(): any;

    /**
     * Get the lighting coefficient.
     * @default 0
     */
    getAmbient(): number;

    /**
     * 
     */
    getAmbientColor(): number[];

    /**
     * 
     */
    getAmbientColorByReference(): number[];

    /**
     * 
     */
    getBackfaceCulling(): boolean;

    /**
     * Get the color of the object.the color of the object
     */
    getColor(): number[];

    /**
     * Get the diffuse lighting coefficient.
     * @default 1
     */
    getDiffuse(): number;

    /**
     * 
     */
    getDiffuseColor(): number[];
    /**
     * 
     */
    getDiffuseColorByReference(): number[];

    /**
     * 
     */
    getEdgeColor(): number[];

    /**
     * 
     */
    getEdgeColorByReference(): number[];

    /**
     * 
     */
    getEdgeVisibility(): boolean;

    /**
     * Get the fast culling of polygons based on orientation of normal
     * with respect to camera. If frontface culling is on, polygons facing
     * towards camera are not drawn.
     * @default false
     */
    getFrontfaceCulling(): boolean;

    /**
     * Get the shading interpolation method for an object.
     */
    getInterpolation(): Interpolation;

    /**
     * Map the interpolation integer to the corresponding ShadingModel.
     */
    getInterpolationAsString(): string;

    /**
     * Get lighting flag for an object. 
     * @default true
     */
    getLighting(): boolean;

    /**
     * Get the width of a Line. The width is expressed in screen units.
     * @default 1.0
     */
    getLineWidth(): number;

    /**
     * Get the opacity of the object. Set/Get the object's opacity. 
     * 1.0 is totally opaque and 0.0 is completely transparent.
     * @default 1
     */
    getOpacity(): number;

    /**
     * Get the diameter of a point. The size is expressed in screen units.
     * @default 1.0
     */
    getPointSize(): number;

    /**
     * Get the surface geometry representation for the object.
     */
    getRepresentation(): Representation;

    /**
     * Get the surface geometry representation for the object as string.
     * @returns
     */
    getRepresentationAsString(): string;

    /**
     * 
     */
    getShading(): boolean;

    /**
     * Get the specular lighting coefficient.
     * @default 0
     */
    getSpecular(): number;

    /**
     * 
     */
    getSpecularColor(): number[];

    /**
     * 
     */
    getSpecularColorByReference(): number[];

    /**
     * Get the specular power.
     * @default 1
     */
    getSpecularPower(): number;

    /**
     *
     * @param ambient
     */
    setAmbient(ambient: number): boolean;

    /**
     * Set the ambient surface color. Not all renderers support separate
     * ambient and diffuse colors. From a physical standpoint it really
     * doesn't make too much sense to have both. For the rendering
     * libraries that don’t support both, the diffuse color is used.
     * 
     * @param r 
     * @param g 
     * @param b 
     */
    setAmbientColor(r: number, g: number, b: number): boolean;

    /**
     * Set the ambient surface color. Not all renderers support separate
     * ambient and diffuse colors. From a physical standpoint it really
     * doesn't make too much sense to have both. For the rendering
     * libraries that don’t support both, the diffuse color is used.
     * 
     * @param ambientColor 
     */
    setAmbientColor(ambientColor: number[]): boolean;

    /**
     * Set the ambient surface color from an RGB array
     * @param ambientColor 
     */
    setAmbientColorFrom(ambientColor: number[]): boolean;

    /**
     * Turn on/off fast culling of polygons based on orientation of normal
     * with respect to camera. If backface culling is on, polygons facing
     * away from camera are not drawn.
     * @param backfaceCulling 
     */
    setBackfaceCulling(backfaceCulling: any): boolean;

    /**
     * Set the color of the object. Has the side effect of setting the
     * ambient diffuse and specular colors as well. This is basically
     * a quick overall color setting method.
     * @param r 
     * @param g 
     * @param b 
     */
    setColor(r: number, g: number, b: number): boolean;

    /**
     * Set the color of the object. Has the side effect of setting the
     * ambient diffuse and specular colors as well. This is basically
     * a quick overall color setting method.
     * @param color 
     */
    setColor(color: number[]): boolean;

    /**
     * Set the diffuse lighting coefficient.
     * @param diffuse 
     */
    setDiffuse(diffuse: number): boolean;

    /**
     * Set the diffuse surface color.
     * @param r 
     * @param g 
     * @param b 
     */
    setDiffuseColor(r: number, g: number, b: number): boolean;

    /**
     * Set the diffuse surface color.
     * @param diffuseColor 
     */
    setDiffuseColor(diffuseColor: number[]): boolean;

    /**
     * Set the diffuse surface color from an RGB array
     * @param diffuseColor 
     */
    setDiffuseColorFrom(diffuseColor: number[]): boolean;

    /**
     * Set the color of primitive edges (if edge visibility is enabled).
     * @param r 
     * @param g 
     * @param b 
     */
    setEdgeColor(r: number, g: number, b: number): boolean;

    /**
     * Set the color of primitive edges (if edge visibility is enabled).
     * @param edgeColor 
     */
    setEdgeColor(edgeColor: number[]): boolean;

    /**
     * Set the color of primitive edges from an RGB array.
     * @param edgeColor 
     */
    setEdgeColorFrom(edgeColor: number[]): boolean;

    /**
     * Turn on/off the visibility of edges. On some renderers it is
     * possible to render the edges of geometric primitives separately
     * from the interior.
     * @param edgeVisibility 
     */
    setEdgeVisibility(edgeVisibility: boolean): boolean;

    /**
     * Turn on/off fast culling of polygons based on orientation of normal
     * with respect to camera. If frontface culling is on, polygons facing
     * towards camera are not drawn.
     * @param frontfaceCulling 
     */
    setFrontfaceCulling(frontfaceCulling: boolean): boolean;

    /**
     * Set the shading interpolation method for an object.
     */
    setInterpolation(interpolation: Interpolation): boolean;

    /**
     * Set interpolation to 0 => 'FLAT'.
     */
    setInterpolationToFlat(): boolean;

    /**
     * Set interpolation to 1 => 'GOURAUD'.
     */
    setInterpolationToGouraud(): boolean;

    /**
     * Set interpolation to 2 => 'PHONG'.
     */
    setInterpolationToPhong(): boolean;

    /**
     * Set lighting flag for an object.
     * @param lighting 
     * @default true
     */
    setLighting(lighting: boolean): boolean;

    /**
     * Set the width of a Line. The width is expressed in screen units.
     * This is only implemented for OpenGL.
     * @param lineWidth 
     * @default 1.0
     */
    setLineWidth(lineWidth: number): boolean;

    /**
     * Set the object's opacity. 1.0 is totally opaque and 0.0 is 
     * completely transparent.
     * @param opacity 
     */
    setOpacity(opacity: number): boolean;

    /**
     * Set the diameter of a point. The size is expressed in screen units.
     * This is only implemented for OpenGL.
     * @param pointSize 
     * @default 1.0
     */
    setPointSize(pointSize: number): boolean;

    /**
     * Control the surface geometry representation for the object.
     * @param representation 
     */
    setRepresentation(representation: Representation): boolean;

    /**
     * Set representation to 0 => 'POINTS'
     */
    setRepresentationToPoints(): boolean;

    /**
     * Set representation to 2 => 'SURFACE'
     */
    setRepresentationToSurface(): boolean;

    /**
     * Set representation to 1 => 'WIREFRAME'
     */
    setRepresentationToWireframe(): boolean;

    /**
     * Enable/Disable shading.
     * @param shading 
     */
    setShading(shading: boolean): boolean;

    /**
     * Set the specular lighting coefficient.
     * @param specular 
     */
    setSpecular(specular: number): boolean;

    /**
     * Set the specular surface color.
     * @param r 
     * @param g 
     * @param b 
     */
    setSpecularColor(r: number, g: number, b: number): boolean;

    /**
     * Set the specular surface color from an RGB array
     * @param specularColor 
     */
    setSpecularColor(specularColor: number[]): boolean;

    /**
     * Set the specular surface color from an RGB array
     * @param specularColor 
     */
    setSpecularColorFrom(specularColor: number[]): boolean;

    /**
     * Set the specular power.
     * @param specularPower 
     */
    setSpecularPower(specularPower: number): boolean;
}

/**
 * Method use to decorate a given object (publicAPI+model) with vtkProperty characteristics.
 *
 * @param publicAPI object on which methods will be bounds (public)
 * @param model object on which data structure will be bounds (protected)
 * @param initialValues (default: {})
 */
export function extend(publicAPI: object, model: object, initialValues?: IPropertyValues): void;

/**
 * Method use to create a new instance of vtkProperty with object color, ambient color, diffuse color,
 * specular color, and edge color white; ambient coefficient=0; diffuse
 * coefficient=0; specular coefficient=0; specular power=1; Gouraud shading;
 * and surface representation. Backface and frontface culling are off.
 * @param initialValues for pre-setting some of its content
 */
export function newInstance(initialValues?: IPropertyValues): vtkProperty;

/** 
 * vtkProperty is an object that represents lighting and other surface
 * properties of a geometric object. The primary properties that can be
 * set are colors (overall, ambient, diffuse, specular, and edge color);
 * specular power; opacity of the object; the representation of the
 * object (points, wireframe, or surface); and the shading method to be
 * used (flat, Gouraud, and Phong). Also, some special graphics features
 * like backface properties can be set and manipulated with this object.
 */
export declare const vtkProperty: {
    newInstance: typeof newInstance,
    extend: typeof extend,
};
export default vtkProperty;
