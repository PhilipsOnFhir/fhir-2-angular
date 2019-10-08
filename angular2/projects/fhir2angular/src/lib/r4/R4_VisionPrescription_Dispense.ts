import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SimpleQuantity } from './R4_SimpleQuantity'
import { R4_VisionBaseEnum } from './R4_VisionBaseEnum'
import { R4_VisionEyesEnum } from './R4_VisionEyesEnum'

export class R4_VisionPrescription_Dispense      extends R4_BackboneElement
{

   static def : string = 'VisionPrescription_Dispense';
   product : R4_Coding ;
   eye : R4_VisionEyesEnum ;
   sphere : string ;
   cylinder : string ;
   axis : string ;
   prism : string ;
   base : R4_VisionBaseEnum ;
   add : string ;
   power : string ;
   backCurve : string ;
   diameter : string ;
   duration : R4_SimpleQuantity ;
   color : string ;
   brand : string ;
   notes : string ;
}
