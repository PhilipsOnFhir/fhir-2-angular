import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_PropertyTypeEnum } from './R5_PropertyTypeEnum'

export class R5_CodeSystem_Property      extends R5_BackboneElement
{

   static def : string = 'CodeSystem_Property';
   code : string ;
   uri : string ;
   description : string ;
   type : R5_PropertyTypeEnum ;
}
