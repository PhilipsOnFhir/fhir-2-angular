import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_VisionBaseEnum } from './R5_VisionBaseEnum'

export class R5_VisionPrescription_Prism      extends R5_BackboneElement
{

   static def : string = 'VisionPrescription_Prism';
   amount : string ;
   base : R5_VisionBaseEnum ;
}
