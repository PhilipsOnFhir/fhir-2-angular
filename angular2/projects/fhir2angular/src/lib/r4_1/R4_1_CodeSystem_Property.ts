import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_PropertyTypeEnum } from './R4_1_PropertyTypeEnum'

export class R4_1_CodeSystem_Property      extends R4_1_BackboneElement
{

   static def : string = 'CodeSystem_Property';
   code : string ;
   uri : string ;
   description : string ;
   type : R4_1_PropertyTypeEnum ;
}
