import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_DataElement_Mapping      extends DSTU2_BackboneElement
{

   static def : string = 'DataElement_Mapping';
   identity : string ;
   uri : string ;
   name : string ;
   comments : string ;
}
