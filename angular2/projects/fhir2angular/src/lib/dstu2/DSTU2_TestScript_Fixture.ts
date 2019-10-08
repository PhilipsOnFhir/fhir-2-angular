import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_TestScript_Fixture      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Fixture';
   autocreate : boolean ;
   autodelete : boolean ;
   resource : DSTU2_Reference ;
}
