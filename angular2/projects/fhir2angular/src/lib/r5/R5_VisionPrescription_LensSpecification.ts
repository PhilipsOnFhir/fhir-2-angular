import { R5_Annotation } from './R5_Annotation'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_VisionEyesEnum } from './R5_VisionEyesEnum'
import { R5_VisionPrescription_Prism } from './R5_VisionPrescription_Prism'

export class R5_VisionPrescription_LensSpecification      extends R5_BackboneElement
{

   static def : string = 'VisionPrescription_LensSpecification';
   product : R5_CodeableConcept ;
   eye : R5_VisionEyesEnum ;
   sphere : string ;
   cylinder : string ;
   axis : string ;
   prism : R5_VisionPrescription_Prism [];
   add : string ;
   power : string ;
   backCurve : string ;
   diameter : string ;
   duration : R5_Quantity ;
   color : string ;
   brand : string ;
   note : R5_Annotation [];
}
