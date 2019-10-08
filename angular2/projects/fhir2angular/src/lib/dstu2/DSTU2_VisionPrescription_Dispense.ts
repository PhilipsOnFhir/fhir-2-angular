import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'
import { DSTU2_VisionBaseEnum } from './DSTU2_VisionBaseEnum'
import { DSTU2_VisionEyesEnum } from './DSTU2_VisionEyesEnum'

export class DSTU2_VisionPrescription_Dispense      extends DSTU2_BackboneElement
{

   static def : string = 'VisionPrescription_Dispense';
   product : DSTU2_Coding ;
   eye : DSTU2_VisionEyesEnum ;
   sphere : string ;
   cylinder : string ;
   axis : string ;
   prism : string ;
   base : DSTU2_VisionBaseEnum ;
   add : string ;
   power : string ;
   backCurve : string ;
   diameter : string ;
   duration : DSTU2_SimpleQuantity ;
   color : string ;
   brand : string ;
   notes : string ;
}
