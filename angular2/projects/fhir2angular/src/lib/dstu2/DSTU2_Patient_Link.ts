import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_LinkTypeEnum } from './DSTU2_LinkTypeEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Patient_Link      extends DSTU2_BackboneElement
{

   static def : string = 'Patient_Link';
   other : DSTU2_Reference ;
   type : DSTU2_LinkTypeEnum ;
}
