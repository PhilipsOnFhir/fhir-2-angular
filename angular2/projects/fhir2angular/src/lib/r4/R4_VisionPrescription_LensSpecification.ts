import { R4_Annotation } from './R4_Annotation'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_VisionEyesEnum } from './R4_VisionEyesEnum'
import { R4_VisionPrescription_Prism } from './R4_VisionPrescription_Prism'

export class R4_VisionPrescription_LensSpecification      extends R4_BackboneElement
{

   static def : string = 'VisionPrescription_LensSpecification';
   product : R4_CodeableConcept ;
   eye : R4_VisionEyesEnum ;
   sphere : string ;
   cylinder : string ;
   axis : string ;
   prism : R4_VisionPrescription_Prism [];
   add : string ;
   power : string ;
   backCurve : string ;
   diameter : string ;
   duration : R4_Quantity ;
   color : string ;
   brand : string ;
   note : R4_Annotation [];
}
