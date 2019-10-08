import { STU3_Annotation } from './STU3_Annotation'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_VisionBaseEnum } from './STU3_VisionBaseEnum'
import { STU3_VisionEyesEnum } from './STU3_VisionEyesEnum'

export class STU3_VisionPrescription_Dispense      extends STU3_BackboneElement
{

   static def : string = 'VisionPrescription_Dispense';
   product : STU3_CodeableConcept ;
   eye : STU3_VisionEyesEnum ;
   sphere : string ;
   cylinder : string ;
   axis : string ;
   prism : string ;
   base : STU3_VisionBaseEnum ;
   add : string ;
   power : string ;
   backCurve : string ;
   diameter : string ;
   duration : STU3_Quantity ;
   color : string ;
   brand : string ;
   note : STU3_Annotation [];
}
