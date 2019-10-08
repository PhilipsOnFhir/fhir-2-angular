import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_VisionEyesEnum } from './R4_1_VisionEyesEnum'
import { R4_1_VisionPrescription_Prism } from './R4_1_VisionPrescription_Prism'

export class R4_1_VisionPrescription_LensSpecification      extends R4_1_BackboneElement
{

   static def : string = 'VisionPrescription_LensSpecification';
   product : R4_1_CodeableConcept ;
   eye : R4_1_VisionEyesEnum ;
   sphere : string ;
   cylinder : string ;
   axis : string ;
   prism : R4_1_VisionPrescription_Prism [];
   add : string ;
   power : string ;
   backCurve : string ;
   diameter : string ;
   duration : R4_1_Quantity ;
   color : string ;
   brand : string ;
   note : R4_1_Annotation [];
}
