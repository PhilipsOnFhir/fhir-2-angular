import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_TestScript_Fixture      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Fixture';
   autocreate : boolean ;
   autodelete : boolean ;
   resource : R4_1_Reference ;
}
