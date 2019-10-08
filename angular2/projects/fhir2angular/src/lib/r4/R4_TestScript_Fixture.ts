import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_TestScript_Fixture      extends R4_BackboneElement
{

   static def : string = 'TestScript_Fixture';
   autocreate : boolean ;
   autodelete : boolean ;
   resource : R4_Reference ;
}
