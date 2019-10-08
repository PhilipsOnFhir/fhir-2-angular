import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_GuideResourcePurposeEnum } from './DSTU2_GuideResourcePurposeEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImplementationGuide_Resource      extends DSTU2_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource';
   purpose : DSTU2_GuideResourcePurposeEnum ;
   name : string ;
   description : string ;
   acronym : string ;
   sourceUri : string ;
   sourceReference : DSTU2_Reference ;
   exampleFor : DSTU2_Reference ;
}
