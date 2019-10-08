import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_PropertyTypeEnum } from './STU3_PropertyTypeEnum'

export class STU3_CodeSystem_Property      extends STU3_BackboneElement
{

   static def : string = 'CodeSystem_Property';
   code : string ;
   uri : string ;
   description : string ;
   type : STU3_PropertyTypeEnum ;
}
