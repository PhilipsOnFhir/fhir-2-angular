import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_PropertyTypeEnum } from './R4_PropertyTypeEnum'

export class R4_CodeSystem_Property      extends R4_BackboneElement
{

   static def : string = 'CodeSystem_Property';
   code : string ;
   uri : string ;
   description : string ;
   type : R4_PropertyTypeEnum ;
}
